import { Component, OnInit } from '@angular/core';
import { Color, Label, MultiDataSet } from 'ng2-charts';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { Store } from '@ngrx/store';
import * as fromStore from 'src/app/store';
import { cloneDeep } from 'lodash';

@Component({
  selector: 'app-pace-graph',
  templateUrl: './pace-graph.component.html',
  styleUrls: ['./pace-graph.component.css']
})
export class PaceGraphComponent implements OnInit {


  public paceChartOptions: ChartOptions = {
    responsive: true,
    scales: {
      yAxes: [{
        ticks: {
          min: -1,
          max: 1
        }
      }]
    }
  };
  public paceChartType: ChartType = 'horizontalBar';
  public paceChartLegend = true;

  public paceChartData: ChartDataSets[] = [
    { data: [-.25, .55, 1], label: 'Pace of training' },
  ];
  public paceChartLabels: string[] = ['Batch 1', 'Batch 2', 'Batch 3'];

  public paceChartColor: Color[] = [

    { backgroundColor: 'orange' },
  ];
// ======================replace==================
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

  constructor(private store: Store<fromStore.AppState>) { }

  ngOnInit(): void {
    this.store.select(fromStore.selectPaceGraphData).subscribe((graph) => {
      this.chartData = cloneDeep(graph.data);
      this.chartLabels = cloneDeep(graph.labels);
    });
  }
}
