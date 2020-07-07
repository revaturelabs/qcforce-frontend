import { Component, OnInit } from '@angular/core';
import { Color, Label, MultiDataSet } from 'ng2-charts';
import { ChartDataSets, ChartOptions } from 'chart.js';
import { Store } from '@ngrx/store';
import * as fromStore from 'src/app/store';
import { cloneDeep } from 'lodash';

@Component({
  selector: 'app-major-graph',
  templateUrl: './major-graph.component.html',
  styleUrls: ['./major-graph.component.css']
})
export class MajorGraphComponent implements OnInit {

  public chartLabels;
  public chartData;

  public chartColor: Color[] = [
    {
      borderColor: 'gray',
      backgroundColor: [
        'rgba(255, 0, 170, 1)',
        'rgba(100, 100, 110, 1)',
        'rgba(000, 100, 200, 1)',
      ]
    }
  ];

  public chartLegend = true;
  public chartType = 'doughnut';

  constructor(private store: Store<fromStore.AppState>) { }

  ngOnInit(): void {
    //this.store.select(fromStore.selectMajorGraphData).subscribe((graph) => {
    //  this.chartData = cloneDeep(graph.data);
    //  this.chartLabels = cloneDeep(graph.labels);
    //});
  }

}
