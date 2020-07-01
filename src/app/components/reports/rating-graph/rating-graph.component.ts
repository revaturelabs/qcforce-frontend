import { Component, OnInit } from '@angular/core';
import { Color, Label, MultiDataSet } from 'ng2-charts';
import { ChartDataSets, ChartOptions } from 'chart.js';
import { Store } from "@ngrx/store";
import { ReportsState } from 'src/app/states/reports.state';
import * as ReportsActions from 'src/app/actions/reports.action';
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
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero: true
        }
      }]
    }
  };

  public chartColor: Color[] =[
    {
      borderColor: 'black',
      backgroundColor: 'rgba(255,110,0,1)',
    },
    {
      borderColor: 'black',
      backgroundColor: 'rgba(200,255,0,1)',
    },
    {
      borderColor: 'black',
      backgroundColor: 'rgba(100, 200, 155,1)',
    },
    {
      borderColor: 'black',
      backgroundColor: 'rgba(200, 150, 100 ,1)',
    },
    {
      borderColor: 'black',
      backgroundColor: 'rgba(10, 80, 255,1)',
    },
    {
      borderColor: 'black',
      backgroundColor: 'rgba(240, 70, 95,1)',
    },
    {
      borderColor: 'black',
      backgroundColor: 'rgba(140, 70, 195,1)',
    },
  ];

  public chartLegend = true;
  
  public chartType = 'bar';
  
  public chartPlugins = [];

  constructor(private store : Store<{ reports: ReportsState }>) { }

  ngOnInit(): void {
    this.store.select((state) => state.reports.ratingGraph).subscribe((graph) => {
      this.chartData = cloneDeep(graph.data);
      this.chartLabels = cloneDeep(graph.labels);
    });
  }

}
