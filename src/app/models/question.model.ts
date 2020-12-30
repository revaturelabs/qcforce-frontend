/**
 * Abstract representation of associate in caliber data
 */
export interface Question {
    id?: number;
    createdOn?:Date;
    type?:String;
    version?:number;
    question?: String[];
}