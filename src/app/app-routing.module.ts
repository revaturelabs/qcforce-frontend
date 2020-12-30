import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BatchListComponent } from './components/batches/batch-list/batch-list.component';
import { BatchesDetailsComponent } from './components/batches/batches-details/batches-details.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ReportsViewComponent } from './components/reports/reports-view/reports-view.component';
import { SurveyFormComponent } from './components/survey-form/survey-form.component';
import { SurveyViewComponent } from './components/survey-info/survey-view/survey-view.component';



const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent},
  { path: 'batch-list', component: BatchListComponent },
  { path: 'batches-details', component: BatchesDetailsComponent },
  { path: 'reports', component: ReportsViewComponent},
  { path: 'surveys', component: SurveyViewComponent},
  { path: '', redirectTo: '/dashboard', pathMatch: 'full'},
  { path: 'survey', component: SurveyFormComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
