/**
 * Abstract representation of question data
 */
export interface Question {
    id?: number;
    createdOn?:Date;
    type?:String;
    version?:number;
    question?: String[];
}