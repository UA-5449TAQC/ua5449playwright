SET NOCOUNT ON;

DECLARE @PersonnelID int = 0;
DECLARE @EMTaskID int = 0;
DECLARE @LookbackDays int = 14;

IF OBJECT_ID('tempdb..#baseline_granted') IS NOT NULL DROP TABLE #baseline_granted;
IF OBJECT_ID('tempdb..#after_granted') IS NOT NULL DROP TABLE #after_granted;

SELECT
    emg.PersonnelID,
    emg.CompanyID,
    emg.EMGTaskID,
    emg.EMGGrantedID,
    emg.EMGModDate
INTO #baseline_granted
FROM dbo.tblEvaluationMatrixGranted emg
WHERE emg.PersonnelID = @PersonnelID
   OR emg.EMGTaskID = @EMTaskID;

EXEC dbo.sp_tblEvaluationMatrixGranted_Job
    @LookbackDays = @LookbackDays,
    @p_PersonnelID = @PersonnelID,
    @p_EMTaskID = @EMTaskID;

SELECT
    emg.PersonnelID,
    emg.CompanyID,
    emg.EMGTaskID,
    emg.EMGGrantedID,
    emg.EMGModDate
INTO #after_granted
FROM dbo.tblEvaluationMatrixGranted emg
WHERE emg.PersonnelID = @PersonnelID
   OR emg.EMGTaskID = @EMTaskID;

SELECT
    a.PersonnelID,
    a.CompanyID,
    a.EMGTaskID,
    a.EMGGrantedID,
    a.EMGModDate,
    CASE
        WHEN a.PersonnelID = @PersonnelID AND a.EMGTaskID = @EMTaskID THEN 'EXPECTED_SCOPE'
        ELSE 'OUT_OF_SCOPE'
    END AS ScopeClassification
FROM #after_granted a
ORDER BY a.PersonnelID, a.EMGTaskID, a.CompanyID;

SELECT CASE
    WHEN EXISTS (
        SELECT 1
        FROM #after_granted a
        WHERE a.PersonnelID <> @PersonnelID
          AND a.EMGTaskID <> @EMTaskID
    ) THEN 'FAIL: unrelated personnel-task rows were returned'
    ELSE 'PASS: result set stayed within requested personnel or task scope'
END AS ValidationResult;

SELECT
    COUNT(*) AS MatchingRowsAfterRun
FROM #after_granted
WHERE PersonnelID = @PersonnelID
  AND EMGTaskID = @EMTaskID;