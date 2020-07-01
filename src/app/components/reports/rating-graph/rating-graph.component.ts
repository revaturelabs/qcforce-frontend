import { Component, OnInit } from '@angular/core';
import { Color, Label, MultiDataSet } from 'ng2-charts';
import { ChartDataSets, ChartOptions } from 'chart.js';

@Component({
  selector: 'app-rating-graph',
  templateUrl: './rating-graph.component.html',
  styleUrls: ['./rating-graph.component.css']
})
export class RatingGraphComponent implements OnInit {

  public chartData: ChartDataSets[] = [
    { data: [3.25, 2, 5, 4, 3, 5], label: 'Week 1'},
    { data: [2.47, 3.81, 4.81, 2.11, 4.13, 3.51, 0, 0 ], label: 'Week 2'},
    { data: [2.23, 3.81, 4.81, 2.11, 4.13, 3.51, 0, 0 ], label: 'Week 3'},
    { data: [2.89, 3.81, 4.81, 2.11, 4.13, 3.51, 0, 0 ], label: 'Week 4'},
    { data: [3.47, 3.81, 4.81, 2.11, 4.13, 3.51, 0, 0 ], label: 'Week 5'},
    { data: [4.47, 3.81, 4.81, 2.11, 4.13, 3.51, 0, 0 ], label: 'Week 6'},
    { data: [1.47, 3.81, 4.81, 2.11, 4.13, 3.51, 0, 0], label: 'Week 7'},
    { data: [0, 0, 0, 0, 0, 0, 3.5, 4.75 ], label: 'Week 8'},
    { data: [0, 0, 0, 0, 0, 0, 2.89, 3.35 ], label: 'Week 9'},
  ];

  public chartLabels: Label[] = [
    'Satisfaction Rating',
    'Materials Helpful',
    'Well Organized',
    'Questions Encouraged',
    'Met Expectations',
    'Topic Understanding',
    'Project Clarity',
    'Project Preparedness'
  ];

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

  constructor() { }

  ngOnInit(): void {
  }

}
