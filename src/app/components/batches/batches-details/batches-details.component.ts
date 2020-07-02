import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { SurveyBatchIdService } from '../../../services/survey-batch-id.service';


import { Color, Label, MultiDataSet } from 'ng2-charts';
import { ChartDataSets, ChartOptions } from 'chart.js';

@Component({
  selector: 'app-batches-details',
  templateUrl: './batches-details.component.html',
  styleUrls: ['./batches-details.component.css']
})
export class BatchesDetailsComponent implements OnInit {

  batchId: string;
  items = [];
  result: {
    batchId: string;
    surveys: Array<any>;
  };

  // batchesDetails: any = [];
  readonly url = 'http://localhost:3001/surveys' + '?batchId=' + this.batchId;

  dataMetricOne = [ 3.3, 2.0, 4.9, 4.0, 3.5, 5.0, 4.5 ];
  labelMetricOne = 'avgSatisfaction';

  dataMetricTwo = [ 2.5, 3.8, 4.8, 2.1, 2.1, 3.9, 5.0 ];
  labelMetricTwo = 'avgExpectation';

  labels = [ 'week 1', 'week 2', 'week 3', 'week 4', 'week 5', 'week 6', 'week 7'];



  public lineChartData: ChartDataSets[] = [
    { data: this.dataMetricOne, label: this.labelMetricOne},
    { data: this.dataMetricTwo, label: this.labelMetricTwo},
  ];
  public lineChartLabels: Label[] = this.labels;

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
   { backgroundColor: 'blue'},
  ];
  public lineChartLegend = true;
  public lineChartType = 'bar';
  public lineChartPlugins = [];


  constructor(private surveyBatchId: SurveyBatchIdService) {}

  ngOnInit(): void {
    this.batchId = localStorage.getItem('batchId');

    this.surveyBatchId.getSurveysByBatchId(this.batchId)
      .subscribe(data => {console.log(data.key);
                          this.items = data; });
    console.log(this.items);

    // this.surveyBatchId.getSurveysByBatchId(this.batchId).toPromise()
    //   .then(data => {console.log(data); });

    // for (let key in data) {
    //   if (data.hasOwnProperty(key))
    //     this.items.push(data[key]);

    }
}
