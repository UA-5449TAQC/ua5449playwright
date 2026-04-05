# VS-5232 SQL Validation Scripts

These scripts are T-SQL templates for validating story VS-5232 against a SQL Server environment.

Job under test:

```sql
EXEC dbo.sp_tblEvaluationMatrixGranted_Job @LookbackDays = 14
```

Stored procedure under test:

```sql
dbo.sp_tblEvaluationMatrixGranted_Job_PopulateWorkList
```

## Files

- `01_run_job_and_capture_metrics.sql`: execute the job and capture runtime plus before/after row counts.
- `02_validate_single_person_task.sql`: validate insert or update behavior for one Personnel/Company/EMTask combination.
- `03_validate_portable_training_cross_company.sql`: validate Company A qualification is derived from portable training taken at Company B.
- `04_validate_parameter_filters.sql`: validate `@p_PersonnelID` and `@p_EMTaskID` limit the worklist correctly.
- `05_validate_orphaned_granted_reprocessing.sql`: validate a worker with granted data but no remaining evaluation is still picked up after OQ sub-task changes.

## Usage

1. Copy the script you need into a query window.
2. Update the variable block at the top with IDs from your environment.
3. Run the baseline section before the job.
4. Make the scenario-specific data change outside these scripts or in a separate controlled setup script.
5. Run the job and review the PASS or FAIL output.

## Assumptions

- Database objects use the names referenced in Jira: `tblEvaluationMatrixGranted`, `tblPersonnelTraining`, `TraineeHistory`, `CandidateHistory`, `tblEvaluation`, `tblEvaluationTask`, `tblEvaluationMatrix`, `tblEvaluationMatrixRule`, `tblOperatorContractor`, and `CompanyTask`.
- `EMGModDate` exists on `tblEvaluationMatrixGranted` and can be used to detect re-evaluation.
- The job supports optional parameters `@p_PersonnelID` and `@p_EMTaskID` as described in the linked QA tasks.

If a table or column name differs in your environment, adjust the query aliases before execution.