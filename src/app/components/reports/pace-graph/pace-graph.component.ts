import { Component, OnInit } from '@angular/core';
import { Color, Label, MultiDataSet } from 'ng2-charts';
import { ChartDataSets, ChartOptions } from 'chart.js';
import { Store } from "@ngrx/store";
import * as fromStore from 'src/app/store';
import { cloneDeep } from 'lodash';

@Component({
  selector: 'app-pace-graph',
  templateUrl: './pace-graph.component.html',
  styleUrls: ['./pace-graph.component.css']
})
export class PaceGraphComponent implements OnInit {

  public chartLabels;

  public chartData;

  public chartColor: Color[] = [
    {
      borderColor: 'gray',
      backgroundColor: [
        'rgba(200, 255, 0, 1)',
        'rgba(100, 200, 100, 1)',
        'rgba(255, 70, 70, 1)',
      ]
    },
    {
      borderColor: 'gray',
      backgroundColor: [
        'rgba(255, 70, 70, 1)',
        'rgba(200, 255, 0, 1)',
        'rgba(100, 200, 100, 1)',
      ]
    },
     {
      borderColor: 'gray',
      backgroundColor: [
        'rgba(255, 70, 70, 1)',
        'rgba(200, 255, 0, 1)',
        'rgba(100, 200, 100, 1)',
      ]
    },
  ];

  public chartLegend = true;
  
  public chartType = 'doughnut';

  constructor(private store : Store<{ reports: fromStore.ReportsState }>) { }

  ngOnInit(): void {
    this.store.select((state) => state.reports.paceGraph).subscribe((graph) => {
      this.chartData = cloneDeep(graph.data);
      this.chartLabels = cloneDeep(graph.labels);
    });
  }
}
