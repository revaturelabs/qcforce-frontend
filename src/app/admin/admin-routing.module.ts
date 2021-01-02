import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MakeQuestionViewComponent } from './components/make-question-view/make-question-view.component';
import { QuestionResponseMultipleChoiceComponent } from './components/make-question-view/question-response-multiple-choice/question-response-multiple-choice.component';
import { SurveyListViewComponent } from './components/survey-list-view/survey-list-view.component';


const routes: Routes = [
  {path:'', component: SurveyListViewComponent},
  {path: 'question', component: MakeQuestionViewComponent},
  {path: 'question/multi-choice', component: QuestionResponseMultipleChoiceComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
