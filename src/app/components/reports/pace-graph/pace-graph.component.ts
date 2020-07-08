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

  public paceChartColor: Color[] = [
    // { backgroundColor: 'red' },
    // { backgroundColor: 'blue' },
    // { backgroundColor: 'green' },
    // { backgroundColor: 'orange' },
    // { backgroundColor: 'gray' },
    // { backgroundColor: 'pink' },
    // { backgroundColor: 'brown' },
    // { backgroundColor: 'black' },
  ];
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
  colorIndex = 0;
  constructor(private store: Store<fromStore.AppState>) { }

  ngOnInit(): void {
    this.store.select(fromStore.selectPaceGraphData).subscribe((graph) => {
    //  console.log(graph.data);
      if (graph) {
        this.paceChartData = cloneDeep(graph.data);
        this.paceChartLabels = cloneDeep(graph.labels);
        if (this.paceChartData.length > 0) {
          this.paceChartColor = this.getChartColor(this.paceChartData[0].data);
        }
      }
    });
  }

  getChartColor(data) {
    const backgroundColor = data.map((datum) => {
      return this.colors[this.getColorGradient(datum)];
    });
    return [{backgroundColor}];
  }
    // -1 to 1 range of datum
    // .10 color changes
    // 20/5
  getColorGradient(datum) {
    const index = Math.round(Math.abs(datum) * this.colors.length);
    if (index === this.colors.length) {
      return index;
    }
    return index - 1;
  }
}
