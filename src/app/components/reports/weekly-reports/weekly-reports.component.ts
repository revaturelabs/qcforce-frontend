import { Component, OnInit } from '@angular/core';
import { ChartDataSets, ChartOptions } from 'chart.js';
import { Label, MultiDataSet, Color } from 'ng2-charts';
import * as pluginAnnotations from 'chartjs-plugin-annotation';
import { Store } from '@ngrx/store';
import * as fromStore from 'src/app/store';
import { cloneDeep } from 'lodash';
@Component({
  selector: 'app-weekly-reports',
  templateUrl: './weekly-reports.component.html',
  styleUrls: ['./weekly-reports.component.css']
})
export class WeeklyReportsComponent implements OnInit {
  public weekChartData: ChartDataSets[];
  public weekChartLabels: Label[];
  public weekChartOptions: ChartOptions = {
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

    
    // annotation: {
    //   annotations: [
    //     {
    //       type: 'line',
    //       mode: 'vertical',
    //       scaleID: 'x-axis-0',
    //       value: 'week 3',
    //       borderColor: 'black',
    //       borderWidth: 2,
    //       label: {
    //         enabled: true,
    //         fontColor: 'white',
    //         content: 'week 3'
    //       }
    //     },
    //     {
    //       type: 'line',
    //       mode: 'horizontal',
    //       scaleID: 'y-axis-0',
    //       value: 3.25,
    //       borderColor: 'black',
    //       borderWidth: 2,
    //       label: {
    //         enabled: true,
    //         fontColor: 'white',
    //         borderColor: 'blue',
    //         content: 'Question 2: 3.25'
    //       }
    //     },
    //   ]
    // },
  };
  public weekChartColors: Color[] = [
    {
      borderColor: 'red',
      backgroundColor: 'rgba(255,255,255,0)'
    },
     {
      borderColor: 'blue',
      backgroundColor: 'rgba(255,255,255,0)'
    },
     {
      borderColor: 'green',
      backgroundColor: 'rgba(255,255,255,0)'
    },
     {
      borderColor: 'orange',
      backgroundColor: 'rgba(255,255,255,0)'
    },
    {
      borderColor: 'gray',
      backgroundColor: 'rgba(255,255,255,0)'
    },
     {
      borderColor: 'pink',
      backgroundColor: 'rgba(255,255,255,0)'
    },
     {
      borderColor: 'brown',
      backgroundColor: 'rgba(255,255,255,0)'
    },
     {
      borderColor: 'black',
      backgroundColor: 'rgba(255,255,255,0)'
    },
  ];
  public weekChartLegend = true;
  public weekChartType = 'line';
  public weekChartPlugins = [pluginAnnotations];

  constructor(private store: Store<fromStore.AppState>) { }

  ngOnInit(): void {
    this.store.select(fromStore.selectWeeklyGraphData).subscribe((graph) => {
      if (graph) {
        this.weekChartData = cloneDeep(graph.data);
        this.weekChartLabels = cloneDeep(graph.labels);
      }
    });
  }

}
