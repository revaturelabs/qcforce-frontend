import { Component, OnInit } from '@angular/core';
import { Color, Label, MultiDataSet } from 'ng2-charts';
import { ChartDataSets, ChartOptions } from 'chart.js';
import { Options } from 'ng5-slider';
import { FormGroup, FormControl } from '@angular/forms';
@Component({
  selector: 'app-batch-reports',
  templateUrl: './batch-reports.component.html',
  styleUrls: ['./batch-reports.component.css'],
  styles: [` .custom-slider {width: 50vw}`]
})
export class BatchReportsComponent implements OnInit {

  weeklyInfo = 'Reports By Week';
  weekDisplayed = false;
  batchDisplayed = false;
  
  minValue: number = 1;
  maxValue: number = 9;
  options: Options = {
    floor: 1,
    ceil: 9,
    step: 1,
    showTicks: true,
  };


  public lineChartData: ChartDataSets[] = [
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
  public lineChartLabels: Label[] = [
    'Satisfaction Rating',
    'Materials Helpful',
    'Well Organized',
    'Questions Encouraged',
    'Met Expectations',
    'Topic Understanding',
    'Project Clarity',
    'Project Preparedness'
  ];
  public lineChartOptions: any  = {
    responsive: true,
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero: true
        }
      }]
    }
  };


  public lineChartColor: Color[] =[
   { backgroundColor: 'orange'},
   { backgroundColor: 'orange'},
   { backgroundColor: 'orange'},
   { backgroundColor: 'orange'},
   { backgroundColor: 'orange'},
   { backgroundColor: 'orange'},
   { backgroundColor: 'orange'},
  ];
  public lineChartLegend = true;
  public lineChartType = 'bar';
  public lineChartPlugins = [];

  public doughnutChartLabels: Label[] = ['Too fast', 'Too slow', 'Good'];
  public doughnutChartData: MultiDataSet  = [
      [6, 1, 2],
      [5, 2, 2],
      [6, 0, 3]
  ];

  public doughnutChartColor: Color[] = [
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
     {
      borderColor: 'gray',
      backgroundColor: [
        'rgba(255, 70, 70, 1)',
        'rgba(200, 255, 0, 1)',
        'rgba(100, 200, 100, 1)',
      ]
    },
  ];

  public doughnutChartLegend = true;
  public doughnutChartType = 'doughnut';

  public majorChartLabels: Label[] = ['Computer Science', 'STEM (non-CS)', 'Non-STEM'];
  public majorChartData: MultiDataSet  = [
      [6, 1, 2],
  ];

  public majorChartColor: Color[] = [
    {
      borderColor: 'gray',
      backgroundColor: [
        'rgba(255, 0, 170, 1)',
        'rgba(100, 100, 110, 1)',
        'rgba(000, 100, 200, 1)',
      ]
    }
  ];

  public majorChartLegend = true;
  public majorChartType = 'doughnut';


  constructor() { }

  ngOnInit(): void {
    // this.lineChartData = this.state.select((state) => {
    //   let data = [];
    //   for() {
    //     let singleData = [];
    //     let label = '';
    //     data.push({ data: singleData, label: label });
    //   }

    //   return data;
    //});
  }

  toggleWeek(){
    this.weekDisplayed = true;
  }
}
