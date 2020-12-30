import { Component, OnInit } from '@angular/core';
import { SurveyForm } from 'src/app/models/survey-form.model';
import { SurveyFormService } from 'src/app/services/survey-form.service';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {

  //surveyForm: SurveyForm;

  constructor(surveyFormService: SurveyFormService) { }

  ngOnInit(): void {
  }

}
