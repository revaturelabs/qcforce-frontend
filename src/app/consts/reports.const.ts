import { ReportsState } from '../states/reports.state';

export const initReportsState: ReportsState = {
  filterOptionDisplayed: "",
  batchFilterOptions: [ "All", "Average" ],
  batchFilter: "Average",
  weekFilterOptions: ["All", "Average", "Week 1", "Week 2", "Week 3", "Week 4", "Week 5", "Week 6", "Week 7", "Week 8"],
  weekFilter: "All",
  graphsDisplayed: [
    "rating-graph",
    "pace-graph",
    "major-graph"
  ],
  responseData: []
}


