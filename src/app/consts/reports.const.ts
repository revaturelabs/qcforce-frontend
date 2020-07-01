import { ReportsState } from '../states/reports.state';

export const initReportsState: ReportsState = {
  filterOptionDisplayed: "",
  batchFilterOption: "Average",
  weekFilterOption: "All",
  graphsDisplayed: [
    "rating-graph",
    "pace-graph",
    "major-graph"
  ],
  responseData: []
}


