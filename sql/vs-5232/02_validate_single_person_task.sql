SET NOCOUNT ON;

DECLARE @PersonnelID int = 0;
DECLARE @CompanyID int = 0;
DECLARE @EMTaskID int = 0;
DECLARE @LookbackDays int = 14;

IF OBJECT_ID('tempdb..#baseline') IS NOT NULL DROP TABLE #baseline;
IF OBJECT_ID('tempdb..#after_run') IS NOT NULL DROP TABLE #after_run;

SELECT
    emg.PersonnelID,
    emg.CompanyID,
    emg.EMGTaskID,
    emg.EMGGrantedID,
    emg.EMGStatusID,
    emg.EMGModDate
INTO #baseline
FROM dbo.tblEvaluationMatrixGranted emg
WHERE emg.PersonnelID = @PersonnelID
  AND emg.CompanyID = @CompanyID
  AND emg.EMGTaskID = @EMTaskID;

SELECT 'BASELINE' AS SnapshotStage, *
FROM #baseline;

EXEC dbo.sp_tblEvaluationMatrixGranted_Job
    @LookbackDays = @LookbackDays,
    @p_PersonnelID = @PersonnelID,
    @p_EMTaskID = @EMTaskID;

SELECT
    emg.PersonnelID,
    emg.CompanyID,
    emg.EMGTaskID,
    emg.EMGGrantedID,
    emg.EMGStatusID,
    emg.EMGModDate
INTO #after_run
FROM dbo.tblEvaluationMatrixGranted emg
WHERE emg.PersonnelID = @PersonnelID
  AND emg.CompanyID = @CompanyID
  AND emg.EMGTaskID = @EMTaskID;

SELECT 'AFTER_RUN' AS SnapshotStage, *
FROM #after_run;

WITH comparison AS (
    SELECT
        COALESCE(a.PersonnelID, b.PersonnelID) AS PersonnelID,
        COALESCE(a.CompanyID, b.CompanyID) AS CompanyID,
        COALESCE(a.EMGTaskID, b.EMGTaskID) AS EMTaskID,
        b.EMGGrantedID AS BaselineGrantedID,
        a.EMGGrantedID AS AfterGrantedID,
        b.EMGStatusID AS BaselineStatusID,
        a.EMGStatusID AS AfterStatusID,
        b.EMGModDate AS BaselineModDate,
        a.EMGModDate AS AfterModDate
    FROM #baseline b
    FULL OUTER JOIN #after_run a
        ON a.PersonnelID = b.PersonnelID
       AND a.CompanyID = b.CompanyID
       AND a.EMGTaskID = b.EMGTaskID
)
SELECT *,
    CASE
        WHEN BaselineGrantedID IS NULL AND AfterGrantedID IS NOT NULL THEN 'PASS: granted row created'
        WHEN BaselineGrantedID IS NOT NULL AND AfterGrantedID IS NOT NULL AND AfterModDate > BaselineModDate THEN 'PASS: granted row updated'
        WHEN BaselineGrantedID IS NOT NULL AND AfterGrantedID IS NOT NULL THEN 'CHECK: row exists but EMGModDate did not advance'
        ELSE 'FAIL: no granted row found after job'
    END AS ValidationResult
FROM comparison;