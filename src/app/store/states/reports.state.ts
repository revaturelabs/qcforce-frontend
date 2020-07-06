export interface ReportsState {
  batchFilterOptions: string[];
  batchFilter: string;
  weekFilterOptions: string[];
  weekFilter: string;
  responseData: any[];
  questionShortList: string[];
  questionLongList: string[];
  // questionMapping: object;
}

export const initReportsState: ReportsState = {

  batchFilterOptions: [ 'Average' ],
  batchFilter: 'Average',
  weekFilterOptions: ['All', 'Average'],
  weekFilter: 'All',

  questionShortList: [
    'Satisfaction Rating',
    'One on One/Assessments',
    'Met Expectations',
    'Pace of Training',
    'Questions Encouraged',
    'Topic Understanding',
    'Well Organized',
    'Materials Helpful'
  ],
  questionLongList: [],
  responseData: []

};

