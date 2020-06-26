import { ChartTable } from '../interfaces/chartTable.interface';

export interface ReportsState {
  chartTableList: ChartTable[];
  selectedChartTable: ChartTable;
  newChartTable: ChartTable;
}
