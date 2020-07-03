import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store'
import { SurveysState } from 'src/app/states/surveys.state';
import * as SurveysActions from 'src/app/actions/surveys.action';

@Component({
  selector: 'app-survey-view',
  templateUrl: './survey-view.component.html',
  styleUrls: ['./survey-view.component.css']
})
export class SurveyViewComponent implements OnInit {
  
  subMenuSelected : string; 

  constructor(private store : Store<{ surveys: SurveysState }>) { }

  ngOnInit(): void {
    this.store.select((state) => state.surveys.subnavSelected).subscribe((navSelected) => {
      this.subMenuSelected = navSelected;
    })
  }

}
