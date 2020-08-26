import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromStore from 'src/app/store'; 
import { reportInvalidActions } from '@ngrx/effects/src/effect_notification';
/**
 * `ReportsViewComponent` (Angular Component)
 *
 * This component acts as the parent component to the routes, sub-menus, and graphs,
 */
@Component({
  selector: 'app-reports-view',
  templateUrl: './reports-view.component.html',
  styleUrls: ['./reports-view.component.css']
})
export class ReportsViewComponent implements OnInit {

  reportVariable = 'Batch/Week reports';
  batchFilter: string;
  weekFilter: string;


  constructor(private store: Store<fromStore.AppState>) { }

  ngOnInit(): void {
    this.store.dispatch(new fromStore.GetBatches());
    this.store.dispatch(new fromStore.GetWeeks());
    this.store.dispatch(new fromStore.GetQuestions());
    this.store.select(fromStore.selectTitle).subscribe((reportTitle) => {
      this.reportVariable = reportTitle;
    });
    this.store.select(fromStore.selectBatchFilter).subscribe((batchFilter) => {
       this.batchFilter = batchFilter;
    });
    this.store.select(fromStore.selectWeekFilter).subscribe((weekFilter) => {
      this.weekFilter = weekFilter;
   });
  }

}
