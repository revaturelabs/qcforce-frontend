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
    maintainAspectRatio: false,
    animation: {
      duration: 0,
     },
    legend: {
      labels: {
        fontSize: 18
      }
    },
  };
  public pieChartLabels: Label[];
  public pieChartData: SingleDataSet;
  public pieChartType: ChartType = 'pie';
  public pieChartLegend = true;
  public pieChartPlugins = [];
  public pieChartColor = [
    {
      backgroundColor: ['teal', 'rgba(248, 74, 11, 1)' ],
    }
  ];

  constructor(private store: Store<fromStore.AppState>) { }

  ngOnInit(): void {
    this.store.select(fromStore.selectAssessmentGraphData).subscribe((graph) => {
      if (graph) {
        this.pieChartData = graph.data;
        this.pieChartLabels = graph.labels;
      }
    });
  }

}
