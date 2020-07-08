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
    animation: {
      duration: 0,
     },
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
    'rgba(248, 206, 11, 1)', // yellow-orange
    'rgba(198, 200, 25, 1)', // yellow
    'rgba(141, 170, 7, 1)', // yellow-green
    'rgba(123, 153, 17, 1)', // green-yellow
    'rgba(103, 147, 17, 1)', // green-yellow-green
    'rgba(93, 155, 15, 1)', // green-green-yellow
    'rgba(68, 173, 15, 1)', // green-green
    'rgba(15, 155, 15, 1)', // dark-green
  ];
  colorIndex = 0;

  public chartLegend = false;
  public chartType = 'bar';
  public chartPlugins = [];

  constructor(private store: Store<fromStore.AppState>) { }

  ngOnInit(): void {

    this.store.select(fromStore.selectRatingGraphData).subscribe((graph) => {
      if (graph) {
        this.chartData = cloneDeep(graph.data);
        this.chartLabels = cloneDeep(graph.labels);
        if (this.chartData.length > 0) {
          this.chartColor = this.getChartColor(this.chartData[0].data);
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
    // 1-5 range of datum
    // .25 color changes
    // 20/5
  getColorGradient(datum) {
    const index = Math.round(((datum - 1) / 4) * this.colors.length);
    if (index === this.colors.length) {
      return index - 1;
    }

    return index;
  }
}
