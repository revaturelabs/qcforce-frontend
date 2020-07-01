import { Component, OnInit } from '@angular/core';
import { Color, Label, MultiDataSet } from 'ng2-charts';
import { ChartDataSets, ChartOptions } from 'chart.js';

@Component({
  selector: 'app-major-graph',
  templateUrl: './major-graph.component.html',
  styleUrls: ['./major-graph.component.css']
})
export class MajorGraphComponent implements OnInit {

  public chartLabels: Label[] = ['Computer Science', 'STEM (non-CS)', 'Non-STEM'];
  public chartData: MultiDataSet  = [
      [6, 1, 2],
  ];

  public chartColor: Color[] = [
    {
      borderColor: 'gray',
      backgroundColor: [
        'rgba(255, 0, 170, 1)',
        'rgba(100, 100, 110, 1)',
        'rgba(000, 100, 200, 1)',
      ]
    }
  ];

  public chartLegend = true;
  public chartType = 'doughnut';

  constructor() { }

  ngOnInit(): void {
  }

}
