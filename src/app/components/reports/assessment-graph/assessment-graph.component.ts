import { Component, OnInit } from '@angular/core';
import { SingleDataSet, Color, Label, MultiDataSet } from 'ng2-charts';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { Store } from '@ngrx/store';
import * as fromStore from 'src/app/store';
import { cloneDeep } from 'lodash';

@Component({
  selector: 'app-assessment-graph',
  templateUrl: './assessment-graph.component.html',
  styleUrls: ['./assessment-graph.component.css']
})
export class AssessmentGraphComponent implements OnInit {

   // Pie
   public pieChartOptions: ChartOptions = {
    responsive: true,
  };
  public pieChartLabels: Label[];
  public pieChartData: SingleDataSet = [ 20, 100];
  public pieChartType: ChartType = 'pie';
  public pieChartLegend = true;
  public pieChartPlugins = [];
  public pieChartColor = [
    {
      backgroundColor: ['red', 'blue' ],
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
