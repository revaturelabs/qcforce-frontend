import { Criteria } from './criteria.interface';
import { ChartData } from './chartData.interface';

export interface ChartTable {
  name: string;
  criteria: Criteria;
  chart: ChartData;
}
