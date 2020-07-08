import { Component, OnInit } from '@angular/core';
import { Color, Label, MultiDataSet } from 'ng2-charts';
import { ChartDataSets, ChartOptions, ChartType} from 'chart.js';
import * as pluginAnnotations from 'chartjs-plugin-annotation';
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
  public weekChartOptions: ChartOptions & { annotation: any }  = {
    responsive: true,
    scales: {
      yAxes: [{
        ticks: {
          min: 1,
          max: 5,
        }
      }]
    },
    annotation: {
      annotations: [
        {
          type: 'line',
          mode: 'vertical',
          scaleID: 'x-axis-0',
          value: 'week 3',
          borderColor: 'black',
          borderWidth: 2,
          label: {
            enabled: true,
            fontColor: 'white',
            content: 'week 3'
          }
        },
        {
          type: 'line',
          mode: 'horizontal',
          scaleID: 'y-axis-0',
          value: 3.25,
          borderColor: 'black',
          borderWidth: 2,
          label: {
            enabled: true,
            fontColor: 'white',
            borderColor: 'blue',
            content: 'Question 2: 3.25'
          }
        },
      ]
    },
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
  ];
  public weekChartLegend = true;
  public weekChartType = 'line';
  public weekChartPlugins = [pluginAnnotations];

  // ===================BaR CHART=====================

  public lineChartData: ChartDataSets[] = [
    { data: [3.25], label: 'satisfaction-rating'},
    { data: [2], label: 'materials-helpful'},
    { data: [2.75], label: 'well-organized'},
    { data: [4], label: 'questions-encouraged'},
    // { data: [2.47, 3.81, 4.81, 2.11, 4.13, 3.51, 0, 0 ], label: 'Week 2'},
    // { data: [2.23, 3.81, 4.81, 2.11, 4.13, 3.51, 0, 0 ], label: 'Week 3'},
    // { data: [2.89, 3.81, 4.81, 2.11, 4.13, 3.51, 0, 0 ], label: 'Week 4'},
    // { data: [3.47, 3.81, 4.81, 2.11, 4.13, 3.51, 0, 0 ], label: 'Week 5'},
    // { data: [4.47, 3.81, 4.81, 2.11, 4.13, 3.51, 0, 0 ], label: 'Week 6'},
    // { data: [1.47, 3.81, 4.81, 2.11, 4.13, 3.51, 0, 0], label: 'Week 7'},
    // { data: [0, 0, 0, 0, 0, 0, 3.5, 4.75 ], label: 'Week 8'},
    // { data: [0, 0, 0, 0, 0, 0, 2.89, 3.35 ], label: 'Week 9'},
  ];
  public lineChartLabels: Label[] = [

    'Survey Questions',
    // 'Satisfaction Rating',
    // 'Materials Helpful',
    //  'Well Organized',
    //  'Questions Encouraged',
    // 'Met Expectations',
    // 'Topic Understanding',
    // 'Project Clarity',
    // 'Project Preparedness'
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


   public lineChartColor: Color[];

  //  { backgroundColor: 'orange'},
  //  { backgroundColor: 'red'},
  //  { backgroundColor: 'green'},
  //  { backgroundColor: 'blue'},
  //  { backgroundColor: 'orange'},
  //  { backgroundColor: 'orange'},
  //  { backgroundColor: 'orange'},
  // ];

  public colors = ['red', 'orange', 'yellow', 'green', 'teal'];
  colorIndex = 0;

  public lineChartLegend = true;
  public lineChartType = 'bar';
  public lineChartPlugins = [];


  constructor() { }

  ngOnInit(): void {
    this.lineChartColor = this.changeBarChartColor(this.lineChartData);    

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

 changeBarChartColor(data) {
    // console.log(this.colors);
    return data.map((datum) => {
    return {backgroundColor: this.colors[Math.round(datum.data[0])]};
    });
 }
}
