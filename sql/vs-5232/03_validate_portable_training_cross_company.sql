SET NOCOUNT ON;

DECLARE @PersonnelID int = 0;
DECLARE @CompanyA_ID int = 0;
DECLARE @CompanyB_ID int = 0;
DECLARE @EMTaskID int = 0;
DECLARE @PortableCourseID int = 0;
DECLARE @LookbackDays int = 14;

PRINT 'Portable training source evidence';

SELECT
    pt.PersonnelID,
    th.CompanyID,
    pt.CourseID,
    pt.ModDate AS TrainingModDate
FROM dbo.tblPersonnelTraining pt
INNER JOIN dbo.TraineeHistory th
    ON th.TraineeHistID = pt.TraineeHistID
WHERE pt.PersonnelID = @PersonnelID
  AND th.CompanyID = @CompanyB_ID
  AND pt.CourseID = @PortableCourseID;

PRINT 'Baseline destination-company granted state';

SELECT
    emg.PersonnelID,
    emg.CompanyID,
    emg.EMGTaskID,
    emg.EMGGrantedID,
    emg.EMGStatusID,
    emg.EMGModDate
FROM dbo.tblEvaluationMatrixGranted emg
WHERE emg.PersonnelID = @PersonnelID
  AND emg.CompanyID = @CompanyA_ID
  AND emg.EMGTaskID = @EMTaskID;

EXEC dbo.sp_tblEvaluationMatrixGranted_Job
    @LookbackDays = @LookbackDays,
    @p_PersonnelID = @PersonnelID,
    @p_EMTaskID = @EMTaskID;

PRINT 'Post-run destination-company granted state';

SELECT
    emg.PersonnelID,
    emg.CompanyID,
    emg.EMGTaskID,
    emg.EMGGrantedID,
    emg.EMGStatusID,
    emg.EMGModDate,
    CASE
        WHEN emg.EMGGrantedID IS NOT NULL THEN 'PASS: Company A granted row exists after portable training evaluation'
        ELSE 'FAIL: Company A granted row was not created or updated'
    END AS ValidationResult
FROM dbo.tblEvaluationMatrixGranted emg
WHERE emg.PersonnelID = @PersonnelID
  AND emg.CompanyID = @CompanyA_ID
  AND emg.EMGTaskID = @EMTaskID;