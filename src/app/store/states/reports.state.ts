export interface ReportsState {
  filterOptionDisplayed: string;
  batchFilterOptions: string[];
  batchFilter: string;
  weekFilterOptions: string[];
  weekFilter: string;
  ratingGraph: any;
  paceGraph: any;
  majorGraph: any;
  responseData: any[];
}

export const initReportsState: ReportsState = {
  filterOptionDisplayed: "",
  batchFilterOptions: [ "All", "Average" ],
  batchFilter: "Average",
  weekFilterOptions: ["All", "Average", "Week 1", "Week 2", "Week 3", "Week 4", "Week 5", "Week 6", "Week 7", "Week 8"],
  weekFilter: "All",
  ratingGraph: {
    visible: false,
    data: [],
    labels: [
      'Satisfaction Rating',
      'Materials Helpful',
      'Well Organized',
      'Questions Encouraged',
      'Met Expectations',
      'Topic Understanding',
      'Project Clarity',
      'Project Preparedness'
    ] 
  },
  paceGraph: {
    visible: false,
    data: [],
    labels: [
      'Too Slow',
      'Good',
      'Too Fast'
    ]
  },
  majorGraph: {
    visible: false,
    data: [],
    labels: [
      'Computer Science Major',
      'STEM major (non-CS)',
      'Non-STEM major'
    ]
  },
  responseData: []
}

