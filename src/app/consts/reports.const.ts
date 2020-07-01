import { ReportsState } from '../states/reports.state';

export const initReportsState: ReportsState = {
  filterOptionDisplayed: "",
  batchFilterOptions: [ "Average", "All" ],
  batchFilter: "Average",
  weekFilterOptions: ["Average", "All"],
  weekFilter: "All",
  graphsDisplayed: [
    "rating-graph",
    "pace-graph",
    "major-graph"
  ],
  responseData: []
}


