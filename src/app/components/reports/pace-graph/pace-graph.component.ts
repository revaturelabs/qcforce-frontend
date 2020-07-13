import { Component, OnInit } from '@angular/core';
import { Color, Label, MultiDataSet } from 'ng2-charts';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { Store } from '@ngrx/store';
import * as fromStore from 'src/app/store';
import { cloneDeep } from 'lodash';
/**
 * `PaceGraphComponent` (Angular Component)
 *
 * This component represents the pace graph,
 * a horizontal bar chart showing the pace of training.
 */
@Component({
  selector: 'app-pace-graph',
  templateUrl: './pace-graph.component.html',
  styleUrls: ['./pace-graph.component.css']
})
export class PaceGraphComponent implements OnInit {

 /** ng2-charts variables;
  * starting with the options property, which can control the canvas display
  * which can control the canvas display.
  */
  public paceChartOptions: ChartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    animation: {
      duration: 0,
     },
    legend: {
      labels: {
        fontSize: 18
      }
    },
    scales: {
      xAxes: [
        {
          display: true,
          ticks: {
            beginAtZero: false,
            min: -1,
            max: 1,
            callback: (value, index, values) => {
              if (value === 1) {
                return 'Too Fast';
              } else if (value === -1) {
                return 'Too Slow';
              } else if (value === 0) {
                return 'Good';
              }
              return value;
            },
            stepSize: 1,
            fontSize: 18
          },
        },
      ],
      yAxes: [
        {
          display: false,
          ticks: {
            fontSize: 18
          },
        },
      ],
    },
  };
  public paceChartType: ChartType = 'horizontalBar';
  public paceChartLegend = false;
  public paceChartData: ChartDataSets[];
  public paceChartLabels: string[] = ['Too Fast', 'Good', 'Too Slow'];
  public paceChartColor: Color[] = [];
  /*Color array for 'temapture reading', green being the closest to 0.
    Other color arrays could be added for alternative modes */
  colors = [
    'rgba(68, 173, 15, 1)', // green-green
    'rgba(93, 155, 15, 1)', // green-green-yellow
    'rgba(123, 153, 17, 1)', // green-yellow
    'rgba(141, 170, 7, 1)', // yellow-green
    'rgba(198, 200, 25, 1)', // yellow
    'rgba(248, 206, 11, 1)', // yellow-orange
    'rgba(248, 176, 11, 1)', // orange-yellow
    'rgba(248, 126, 11, 1)', // orange
    'rgba(248, 74, 11, 1)', // red-orange
    'rgba(248, 11, 15, 1)', // red
  ];
  /** constructor */
  constructor(private store: Store<fromStore.AppState>) { }
  /*on initialization, the data from ngrx store is grabbed and translated to show labels and data */
  ngOnInit(): void {
    this.store.select(fromStore.selectPaceGraphData).subscribe((graph) => {
      if (graph) {
        this.paceChartData = cloneDeep(graph.data);
        this.paceChartLabels = cloneDeep(graph.labels);
        if (this.paceChartData.length > 0) {
          this.paceChartColor = this.getChartColor(this.paceChartData[0].data);
        }
      }
    });
  }
  /* grabs color from getColorGradient() and sets to backgroundColor of pace chart */
  getChartColor(data) {
    const backgroundColor = data.map((datum) => {
      return this.colors[this.getColorGradient(datum)];
    });
    return [{backgroundColor}];
  }
  /* Normalizes the data range of -1 to 1 and scales it to the length of the color array @line: 67 */
  getColorGradient(datum) {
    const index = Math.round(Math.abs(datum) * this.colors.length);
    if (index === this.colors.length) {
      return index - 1;
    }
    return index ;
  }
}
