import { Component, OnInit,  ViewChild } from '@angular/core';
import { Color, Label } from 'ng2-charts';
import { ChartDataSets, ChartOptions } from 'chart.js';

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.css']
})

export class ReportsComponent implements OnInit {
  
  public lineChartData: ChartDataSets[] = [
    { data: [3.25, 2, 5, 4, 3, 5, 1], label: 'Batch 1'},
    { data: [2.47, 3.81, 4.81, 2.11, 4.13, 3.51, 1.89], label: 'Batch 2'},
    { data: [2.47, 3.81, 4.81, 2.11, 4.13, 3.51, 1.89], label: 'Batch 3'}
  ];
  public lineChartLabels: Label[] = ['Question 1', 'Question 2', 'Question 3', 'Question 4', 'Question 5', 'Question 6', 'Question 7'];
  public lineChartOptions = {
    responsive: true,
  };
  public lineChartColors: Color[] = [
    {
      borderColor: 'gray',
      backgroundColor: 'rgba(253, 150, 67, 1)',
    },
  ];
  public lineChartLegend = false;
  public lineChartType = 'bar';
  public lineChartPlugins = [];



  constructor() { }

  ngOnInit(): void {
  }

  changed() {
    console.log('switched:');
  }

}
