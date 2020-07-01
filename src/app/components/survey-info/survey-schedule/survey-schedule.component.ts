import { Component, OnInit } from '@angular/core';
// Step 1:
// import { Survey } from '../../../models/survey.model';
import { Batch } from '../../../models/batch.model';


import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as fromStore from '../../../store';

@Component({
  selector: 'app-survey-schedule',
  templateUrl: './survey-schedule.component.html',
  styleUrls: ['./survey-schedule.component.css']
})
export class SurveyScheduleComponent implements OnInit {
  // Step 2:
  // surveys$: Observable<Survey[]>;
  batchId: string;
  batches$: Observable<Batch[]>;


  // Step 3:
  constructor(private store: Store<fromStore.ReportState>) { }

  ngOnInit(): void {
    // Step 4:
    // this.surveys$ = this.store.select(fromStore.getAllSurveys);
    this.batches$ = this.store.select(fromStore.getAllBatches);
    this.store.dispatch(new fromStore.LoadBatches());
    }
  }

