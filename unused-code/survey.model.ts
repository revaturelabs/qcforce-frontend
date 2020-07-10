import { Question } from '../models/question.model';

export interface Survey {
    id?: number;
    name?: string;
    batch_name?: string;
    questions?: Question[];
}
