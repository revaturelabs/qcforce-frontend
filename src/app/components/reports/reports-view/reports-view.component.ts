import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromStore from 'src/app/store'; 
import { reportInvalidActions } from '@ngrx/effects/src/effect_notification';

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
    this.store.dispatch(new fromStore.GetAnswers());
    this.store.select(fromStore.selectTitle).subscribe((reportTitle) => {
      this.reportVariable = reportTitle;
    });
  }

}
