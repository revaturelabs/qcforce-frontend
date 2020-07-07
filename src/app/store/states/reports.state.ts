export interface ReportsState {
  batchFilterOptions: string[];
  batchFilter: string;
  weekFilterOptions: string[];
  weekFilter: string;
  responseData: any[];
  questionShortList: string[];
  questionLongList: string[];
  listShortQuestions: string[];
  listLongQuestions: string[];
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
  listShortQuestions: [
    'Project Clarity',
    'One-to-One/Online Assessment',
    'Overall Feedback',
    'Batch',
    'Background',
    'Topic Understanding',
    'Location',
    'Project Preparedness',
    'SPARK',
    'Email',
    'Programming Experience',
    'Name',
    'Project Feedback',
    'Issues',
    'Satisfaction Rating',
    'Met Expectations',    
    'Pace of Training',
    'Questions Encouraged',
    'Well Organized',
    'Week',
    'Materials Helpful',
    'Batch Name'
  ],
  questionLongList: [],
  listLongQuestions: [
  ],
  responseData: [],

};

