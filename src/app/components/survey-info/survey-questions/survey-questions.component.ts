import { Component, OnInit } from '@angular/core';
import { SurveysService } from '../../../services/surveys.service';
@Component({
  selector: 'app-survey-questions',
  templateUrl: './survey-questions.component.html',
  styleUrls: ['./survey-questions.component.css']
})
export class SurveyQuestionsComponent implements OnInit {

  constructor(private surveyService: SurveysService) { }

  ngOnInit(): void {
  }

  sendSyncReq() {
    this.surveyService.postSync();
  }
}
