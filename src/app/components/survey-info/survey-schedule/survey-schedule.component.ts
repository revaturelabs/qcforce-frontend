import { Component, OnInit } from '@angular/core';
// Step 1:
import { Survey } from '../../../models/survey.model';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as fromStore from '../../../store';

@Component({
  selector: 'app-survey-schedule',
  templateUrl: './survey-schedule.component.html',
  styleUrls: ['./survey-schedule.component.css']
})
export class SurveyScheduleComponent implements OnInit {

  constructor(private store: Store<fromStore.ReportState>) { }

  ngOnInit(): void {
    this.store.select<any>('reports').subscribe(state => {
      console.log(state);
    });
  }

}
