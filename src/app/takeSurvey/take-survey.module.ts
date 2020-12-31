import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuestionComponent } from './survey-form/question/question.component';
import { MultipleChoiceComponent } from './survey-form/question/multiple-choice/multiple-choice.component';
import { PickFromRangeComponent } from './survey-form/question/pick-from-range/pick-from-range.component';
import { ShortAnswerComponent } from './survey-form/question/short-answer/short-answer.component';
import { SurveyFormComponent } from './survey-form/survey-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TakeSurveyRoutingModule } from './take-survey-routing.module';
import { TakeSurveyComponent } from './take-survey.component';



@NgModule({
  declarations: [
    TakeSurveyComponent,
    MultipleChoiceComponent,
    PickFromRangeComponent,
    ShortAnswerComponent,
    SurveyFormComponent,
    QuestionComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    TakeSurveyRoutingModule,
    ReactiveFormsModule
  ]
})
export class TakeSurveyModule { }
