import { ChartTable } from '../interfaces/chartTable.interface';

export interface ReportState {
  chartTableList: ChartTable[];
  selectedChartTable: ChartTable;
  newChartTable: ChartTable;
}
