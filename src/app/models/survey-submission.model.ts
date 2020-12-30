/**
 * Abstract representation of survey submission
 */
export interface SurveySubmission {
    id?: number;
    createdOn?:Date;
    employeeId?:number;
    batchId?:number;
    answers?: String[];
}