/**
 *  SurveyForm Model interface defines all properties
 *  which this application processes
 */

export interface SurveyForm {
    
    id?: number;
    title?: String;
    createdBy?: String; 
    createdOn?: Date;
    version?: number;
    questions?: String [];
    week?: number;
    
}