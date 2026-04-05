SET NOCOUNT ON;

DECLARE @LookbackDays int = 14;
DECLARE @PersonnelID int = NULL;
DECLARE @EMTaskID int = NULL;
DECLARE @CompanyID int = NULL;

DECLARE @StartedAt datetime2(3) = SYSUTCDATETIME();
DECLARE @FinishedAt datetime2(3);
DECLARE @DurationMs bigint;

DECLARE @BeforeCount int;
DECLARE @AfterCount int;

SELECT @BeforeCount = COUNT(*)
FROM dbo.tblEvaluationMatrixGranted emg
WHERE (@PersonnelID IS NULL OR emg.PersonnelID = @PersonnelID)
  AND (@EMTaskID IS NULL OR emg.EMGTaskID = @EMTaskID)
  AND (@CompanyID IS NULL OR emg.CompanyID = @CompanyID);

PRINT 'Starting VS-5232 validation run';
PRINT CONCAT('UTC start time: ', CONVERT(varchar(30), @StartedAt, 126));

EXEC dbo.sp_tblEvaluationMatrixGranted_Job
    @LookbackDays = @LookbackDays,
    @p_PersonnelID = @PersonnelID,
    @p_EMTaskID = @EMTaskID;

SET @FinishedAt = SYSUTCDATETIME();
SET @DurationMs = DATEDIFF_BIG(millisecond, @StartedAt, @FinishedAt);

SELECT @AfterCount = COUNT(*)
FROM dbo.tblEvaluationMatrixGranted emg
WHERE (@PersonnelID IS NULL OR emg.PersonnelID = @PersonnelID)
  AND (@EMTaskID IS NULL OR emg.EMGTaskID = @EMTaskID)
  AND (@CompanyID IS NULL OR emg.CompanyID = @CompanyID);

SELECT
    @StartedAt AS StartedAtUtc,
    @FinishedAt AS FinishedAtUtc,
    @DurationMs AS DurationMs,
    CAST(@DurationMs / 1000.0 AS decimal(18, 2)) AS DurationSeconds,
    CAST(@DurationMs / 60000.0 AS decimal(18, 2)) AS DurationMinutes,
    @BeforeCount AS GrantedRowsBefore,
    @AfterCount AS GrantedRowsAfter,
    @AfterCount - @BeforeCount AS GrantedRowDelta;

IF @PersonnelID IS NULL AND @EMTaskID IS NULL
BEGIN
    SELECT CASE
        WHEN @DurationMs < 600000 THEN 'PASS: changes-only target met if this was a scoped delta run'
        ELSE 'INFO: duration exceeded 10 minutes; compare against expected run type'
    END AS ChangesOnlyTimingAssessment;
END;