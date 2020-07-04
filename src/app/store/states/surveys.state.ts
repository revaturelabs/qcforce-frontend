import { Survey } from 'src/app/models/survey.model';

export interface SurveysState {
  subnavItems: string[];
  subnavSelected: string;
  data: Survey[];
  loaded: boolean;
  loading: boolean;
}

export const initSurveysState : SurveysState = {
  subnavItems: ['Schedule', 'Edit'],
  subnavSelected: 'Schedule',
  data: [
    {
        id: 1,
        name: '2005 NY',
        questions: [
            {
                name: 'avgSatisfaction',
                value: 4.2
            },
            {
                name: 'avgUnderstanding',
                value: 3.8
            },
        ]
    }
  ],
  loaded: false,
  loading: false,
}
