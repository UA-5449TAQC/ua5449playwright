# VS-5232 Test Cases

## Scope

Story: VS-5232 - Tech Debt - update matrix granting job

Value statement: As a contractor, qualifications calculated via the SoCal and SDGE matrix must update efficiently and continue to calculate correct parent qualification status.

Primary acceptance criteria:

- The matrix granted job calculates a parent qualification for SoCal and SDGE when a worker completes training and qualification requirements.
- The job must run faster while preserving correct calculation behavior.
- Changes-only execution target: less than approximately 10 minutes.
- Overnight execution target: reduce from multiple hours to about 1 hour.

Job under test:

```sql
EXEC sp_tblEvaluationMatrixGranted_Job @LookbackDays = 14
```

Stored procedure under test:

```sql
sp_tblEvaluationMatrixGranted_Job_PopulateWorkList
```

## Preconditions

- Run in DEV, QA, or UAT with representative SoCal and SDGE matrix data.
- Identify test data for training-based, OQ-based, portable training, granted, and no-granted cases.
- Capture baseline records before each run from the relevant source tables and from `tblEvaluationMatrixGranted`.
- Record job start time, end time, row counts, and any execution logs for performance cases.

## Test Cases

| ID | Scenario | Preconditions | Steps | Expected Result |
| --- | --- | --- | --- | --- |
| TC-01 | Training record added or modified | Personnel has `TraineeHistory`; selected course is linked to matrix with `EMRelatedItemTypeID = 1` | Insert a new training record or update training `ModDate`; run the job; query granted records for the personnel, company, and task | Granted record is created or updated for the matching parent qualification |
| TC-02 | Portable training completed at another company | Same personnel exists at Company A and Company B; portable course linked to matrix; no granted exists yet at Company A | Add portable training at Company B; run the job; query Company A granted results | Company A qualification is updated from portable training taken at Company B |
| TC-03 | `TraineeHistory` modified | Personnel already has training linked to matrix | Update `TraineeHistory.ModDate`; run the job; compare baseline and current granted metadata | Existing granted record is re-evaluated and updated |
| TC-04 | `TraineeHistory` changed with only portable training elsewhere | Personnel is active at Company A and has qualifying portable training only at Company B | Update Company A `TraineeHistory.ModDate`; run the job | Company A evaluation includes portable training completed at Company B |
| TC-05 | Training course modified | Course is used by matrix and has multiple trainee completions | Update course `ModDate`; run the job; validate impacted workers | All affected workers tied to that course are re-evaluated |
| TC-06 | Portable course modified | Portable course has completions at Company B and personnel also belong to Company A | Update portable course `ModDate`; run the job | Re-evaluation occurs for other applicable companies, not only the training company |
| TC-07 | OQ evaluation inserted or modified | Personnel has `CandidateHistory`; matrix requirement is OQ with `EMRelatedItemTypeID = 0` | Insert or update `Evaluation` and `EvaluationTask`; run the job | Granted record is created or updated from the OQ path |
| TC-08 | OQ `EvaluationTask` modified | Existing OQ evaluation task is linked to a matrix requirement | Update `EvalTaskModDate`; run the job | Granted data is re-evaluated based on the changed evaluation task |
| TC-09 | `CandidateHistory` changed with existing granted | Candidate already has granted records | Update `CandHistModDate`; run the job | All granted records for that candidate are re-evaluated |
| TC-10 | `CandidateHistory` changed with OQ evidence but no granted | Candidate has valid OQ evaluation but no granted record | Update `CandHistModDate`; run the job | First-time granted record is created through the OQ evaluation chain |
| TC-11 | `CandidateHistory` changed with training evidence but no granted | Candidate has qualifying training, no OQ evaluation, and no granted record | Update `CandHistModDate`; run the job | First-time granted record is created through the training chain |
| TC-12 | `CandidateHistory` changed with portable training only at another company | Candidate at Company A has portable training only at Company B and no granted at Company A | Update `CandHistModDate` for Company A; run the job | Company A granted record is created using the portable Company B training |
| TC-13 | Matrix training requirement changed | Matrix training requirement exists for a course with matching trainees | Update matrix requirement `EMModDate`; run the job | All workers with matching training are evaluated or re-evaluated |
| TC-14 | Matrix OQ requirement changed | Matrix OQ requirement exists for a sub-task with matching evaluations | Update matrix requirement `EMModDate`; run the job | All workers with matching OQ evaluations are evaluated or re-evaluated |
| TC-15 | Matrix change re-evaluates existing granted | Matrix task already has granted workers | Modify matrix requirement for the same parent task; run the job | Existing granted workers are reprocessed and remain correct |
| TC-16 | Matrix rule logic changed | Matrix rule exists for a parent task; test data includes partial training, portable training, and OQ-only workers with no granted records | Update `EMRModDate` to simulate rule change such as AND to OR; run the job | Newly eligible workers are found through training, portable training, and OQ paths without requiring an existing granted record |
| TC-17 | OQ sub-task modified | Sub-task is referenced by matrix and has evaluated workers | Update `TaskModDate` on the OQ sub-task; run the job | All applicable workers are re-evaluated from the OQ sub-task change |
| TC-18 | OQ sub-task changed with orphaned granted | Worker has granted record for an OQ task; supporting evaluation is deleted before the run | Delete `Evaluation` and `EvaluationTask`; update sub-task `TaskModDate`; run the job | Job still finds and re-evaluates the worker through the granted path; orphaned granted is not missed |
| TC-19 | Parent task modified | Parent qualification task already has granted workers | Update parent task `TaskModDate`; run the job | All granted records for the parent task are re-evaluated |
| TC-20 | Parent task changed with no granted yet | Test data includes training-only, portable-training, and OQ-only workers who do not yet have granted records | Update parent task `TaskModDate`; run the job | First-time evaluation occurs for eligible workers across all supported source paths |
| TC-21 | Operator-contractor relationship changed or created | Operator has matrix requirements; contractor has eligible workers; include cases with no prior OC relationship | Update or insert `tblOperatorContractor`; run the job | Existing granted records are re-evaluated and first-time qualification is created where the new relationship makes a worker eligible |
| TC-22 | Company-task relationship changed or created | Operator task activation or update affects a contractor with eligible workers | Update or insert `CompanyTask`; run the job | Existing and first-time evaluations run correctly for eligible workers |
| TC-23 | Contractor company record modified | Contractor company has workers with granted, training-only, portable-training, and OQ-only cases | Update company `CompModDate`; run the job | Company change triggers correct re-evaluation and first-time qualification processing |
| TC-24 | Parameter filter for training path | Test data contains at least two personnel and two matrix tasks | Run job with `@p_PersonnelID = X` and `@p_EMTaskID = T1` after training-path data changes | Only the requested personnel-task combination enters the worklist; unrelated personnel or tasks are excluded |
| TC-25 | Parameter filter for OQ and relationship paths | Test data contains at least two personnel and two matrix tasks across OQ and relationship scenarios | Run job with `@p_PersonnelID = X` and `@p_EMTaskID = T1` after OQ or relationship-path changes | Only the requested personnel-task combination enters the worklist across OQ and relationship-based triggers |
| TC-26 | Changes-only runtime target | Controlled dataset where only recent changes are in scope | Run the job with normal lookback conditions; capture total runtime and processed row count | Runtime is below approximately 10 minutes and calculations remain correct |
| TC-27 | Overnight runtime target | Full representative nightly dataset is available | Run the full overnight job; capture start and finish times and compare results with baseline | Runtime is approximately 1 hour or better and output remains functionally correct |

## Validation Queries

Use targeted queries after each run to compare before and after state for the affected worker, company, and parent task.

- Confirm whether a row was inserted or updated in `tblEvaluationMatrixGranted`.
- Confirm `EMGModDate` or equivalent audit metadata changed when re-evaluation is expected.
- Confirm no unrelated personnel or tasks are added when parameter filters are used.
- Confirm cross-company portable-training scenarios update the destination company, not only the source company.

## Coverage Notes

- Training-path coverage includes direct training, trainee history changes, course changes, and matrix training requirement changes.
- OQ-path coverage includes evaluation changes, evaluation task changes, sub-task changes, and OQ requirement changes.
- Relationship coverage includes `OperatorContractor`, `CompanyTask`, and contractor company changes.
- Regression coverage includes orphaned granted records, partial-qualification rule changes, and no-granted-yet first-time evaluation paths.
- Performance coverage is required to satisfy the story acceptance criteria and should be treated as release-blocking for this story.

## Evidence To Capture

- SQL used to set up or modify each scenario.
- Baseline and post-run query results.
- Runtime metrics for the changes-only and overnight runs.
- Any discrepancies between expected source-path resolution and actual granted results.

## Source Mapping

- Story: VS-5232
- Linked QA tasks used to derive detailed scenarios: VS-5279 and VS-5280