import { Report } from 'src/app/models/reports.model';

export interface ReportsState {
  batchFilterOptions: string[];
  batchFilter: string;
  weekFilterOptions: string[];
  weekFilter: string;
  weekGraphData: Report[];
  weekGraphQuestions: string[];
  ratingGraphData: Report[];
  ratingGraphQuestions: string[];
  listShortQuestions: string[];
  listLongQuestions: string[];
  paceGraphData: Report[];
  paceGraphQuestions: string[];
  assessGraphData: Report[];
  assessGraphQuestions: string[];
}

export const initReportsState: ReportsState = {

  batchFilterOptions: [ 'Average' ],
  batchFilter: 'Average',
  weekFilterOptions: ['All', 'Average'],
  weekFilter: 'Average',

  weekGraphData: [],
  weekGraphQuestions: [
    'Satisfaction Rating',
    'Met Expectations',
    'Questions Encouraged',
    'Topic Understanding',
    'Well Organized',
    'Materials Helpful',
    'Project Clarity',
    'Project Preparedness',
  ],

  ratingGraphData: [],
  ratingGraphQuestions: [
    'Satisfaction Rating',
    'Met Expectations',
    'Questions Encouraged',
    'Topic Understanding',
    'Well Organized',
    'Materials Helpful',
    'Project Clarity',
    'Project Preparedness',
  ],

  paceGraphData: [],
  paceGraphQuestions: [
    'Pace of Training',
  ],

  assessGraphData: [],
  assessGraphQuestions: [
    'One-to-One/Online Assessment'
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

  listLongQuestions: [
  ],


};

