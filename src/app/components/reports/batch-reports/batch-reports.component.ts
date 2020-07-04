import { Component, OnInit } from '@angular/core';
import { Color, Label, MultiDataSet } from 'ng2-charts';
import { ChartDataSets, ChartOptions, ChartType} from 'chart.js';
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
  minValue = 1;
  maxValue = 9;
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


  public lineChartColor: Color[] = [
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

  // ==================Pace Chart====================

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


 // =====================Major Chart===============================
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


  // =================Week Chart=================================

  public weekChartData: ChartDataSets[] = [
    { data: [3.45, 2.89, 3.99, 4.01, 4.45, 4.12, 3.72], label: 'Question 1' },
    { data: [2.93, 3.67, 3.25, 2.90, 4.23, 2.45, 3.75], label: 'Question 2' },
    { data: [2.12, 3.3, 3.8, 2.5, 4.8, 2.25, 2.4], label: 'Question 3' },
    { data: [2.99, 4.06, 3.89, 3.54, 4.45, 2.7, 3.36], label: 'Question 4' },
  ];
  public weekChartLabels: Label[] = ['week 1', 'week 2', 'week 3', 'week 4', 'week 5', 'week 6', 'week 7'];
  public weekChartOptions: ChartOptions  = {
    responsive: true,
    scales: {
      yAxes: [{
        ticks: {
          min: 1,
          max: 5,
        }
      }]
    }
  };
  public weekChartColors: Color[] = [
    {
      borderColor: 'red',
      backgroundColor: 'white'
    },
     {
      borderColor: 'blue',
      backgroundColor: 'white'
    },
     {
      borderColor: 'green',
      backgroundColor: 'white'
    },
     {
      borderColor: 'orange',
      backgroundColor: 'white'
    },
  ];
  public weekChartLegend = true;
  public weekChartType = 'line';
  public weekChartPlugins = [];


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
    // });
  }

  toggleWeek(){
    this.weekDisplayed = true;
  }
}
