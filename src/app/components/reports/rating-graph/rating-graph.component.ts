import { Component, OnInit } from '@angular/core';
import { Color, Label, MultiDataSet } from 'ng2-charts';
import { ChartDataSets, ChartOptions } from 'chart.js';
import { Store } from '@ngrx/store';
import * as fromStore from 'src/app/store';
import { cloneDeep } from 'lodash';

@Component({
  selector: 'app-rating-graph',
  templateUrl: './rating-graph.component.html',
  styleUrls: ['./rating-graph.component.css']
})
export class RatingGraphComponent implements OnInit {

  public chartData;

  public chartLabels;

  public chartOptions: any  = {
    responsive: true,
    maintainAspectRatio: false,
    legend: {
      labels: {
        fontSize: 18
      }
    },
    scales: {
      yAxes: [
        {
            ticks: {
            min: 0,
            max: 5,
            fontSize: 18
          },
        },
      ],
      xAxes: [
        {
            ticks: {
            fontSize: 18
          },
        },
      ],
    },
  };
  public chartColor: Color[] = [
    {
      borderColor: 'black',
      backgroundColor: [
        // 'rgba(248, 11, 15, 1)',
        // 'orange',
        // 'yellow',
        // 'yellowOrange',
        // 'rgba(200, 100, 000,1)',
        // 'rgba(100, 255, 150,1)',
        // 'rgba(100, 255, 150,1)',
        // 'rgba(100, 255, 000,1)',
      ],
    },
  ];
  colors = [
    'rgba(65, 5, 5, 1)', // darkest-red
    'rgba(165, 13, 15, 1)', // dark-red
    'rgba(248, 11, 15, 1)', // red
    'rgba(248, 74, 11, 1)', // red-orange
    'rgba(248, 126, 11, 1)', // orange
    'rgba(248, 176, 11, 1)', // orange-yellow
    'rgba(248, 231, 5, 1)', // yellow
    'rgba(183, 247, 7, 1)', // yellow-green
    'rgba(63, 247, 7, 1)', // green
  ];
  colorIndex = 0;

  public chartLegend = false;
  public chartType = 'bar';
  public chartPlugins = [];

  constructor(private store: Store<fromStore.AppState>) { }

  ngOnInit(): void {
    // this.chartColor = this.getChartColor(this.chartData);
    this.store.select(fromStore.selectRatingGraphData).subscribe((graph) => {
      console.log(graph.data);
      this.chartData = cloneDeep(graph.data);
      this.chartLabels = cloneDeep(graph.labels);
    });
  }

  getChartColor(data) {
    return data.map((datum) => {
      return {backgroundColor: this.colors[Math.round(datum.data[0])]};
    });
  }

}
