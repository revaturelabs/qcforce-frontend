import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store'
import * as fromStore from 'src/app/store';
/*Survey-view is container component for survey-questions, and/or anything else to inclue in future additions  */
@Component({
  selector: 'app-survey-view',
  templateUrl: './survey-view.component.html',
  styleUrls: ['./survey-view.component.css']
})
export class SurveyViewComponent implements OnInit {

  subMenuSelected: string;

  constructor(private store: Store<fromStore.AppState>) { }

  ngOnInit(): void {
  }

}
