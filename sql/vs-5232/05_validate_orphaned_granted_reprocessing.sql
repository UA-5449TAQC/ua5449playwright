SET NOCOUNT ON;

DECLARE @PersonnelID int = 0;
DECLARE @CandHistoryID int = 0;
DECLARE @EMTaskID int = 0;
DECLARE @SubTaskID int = 0;
DECLARE @LookbackDays int = 14;

PRINT 'Baseline granted record';

SELECT
    emg.PersonnelID,
    emg.CompanyID,
    emg.EMGTaskID,
    emg.EMGGrantedID,
    emg.EMGStatusID,
    emg.EMGModDate
FROM dbo.tblEvaluationMatrixGranted emg
WHERE emg.PersonnelID = @PersonnelID
  AND emg.EMGTaskID = @EMTaskID;

PRINT 'Evaluation evidence should be absent before running this validation';

SELECT
    e.EvaluationID,
    et.EvalTaskID,
    et.TaskID,
    e.CandHistoryID
FROM dbo.tblEvaluation e
LEFT JOIN dbo.tblEvaluationTask et
    ON et.EvaluationID = e.EvaluationID
WHERE e.CandHistoryID = @CandHistoryID
  AND et.TaskID = @SubTaskID;

PRINT 'Update the OQ sub-task ModDate before running this script if not already done';

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
    emg.EMGModDate,
    CASE
        WHEN emg.EMGGrantedID IS NOT NULL THEN 'PASS: orphaned granted record was still processed'
        ELSE 'FAIL: orphaned granted record was not found after job'
    END AS ValidationResult
FROM dbo.tblEvaluationMatrixGranted emg
WHERE emg.PersonnelID = @PersonnelID
  AND emg.EMGTaskID = @EMTaskID;