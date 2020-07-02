import { Component, OnInit } from '@angular/core';
import { Store } from "@ngrx/store";
import { ReportsState } from 'src/app/states/reports.state';
import * as ReportsActions from 'src/app/actions/reports.action'; 

@Component({
  selector: 'app-reports-view',
  templateUrl: './reports-view.component.html',
  styleUrls: ['./reports-view.component.css']
})
export class ReportsViewComponent implements OnInit {

  constructor(private store : Store<{ reports: ReportsState }>) { }

  ngOnInit(): void {
    this.store.dispatch(ReportsActions.getAnswers());    
  }

}
