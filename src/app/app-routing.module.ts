import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { SurveyCreateComponent } from './components/survey-create/survey-create.component';
import { SurveyManageComponent } from './components/survey-manage/survey-manage.component';
import { SurveyScheduleComponent } from './components/survey-schedule/survey-schedule.component';
import { BatchesComponent } from './components/batches/batches.component';
import { BatchesDetailsComponent } from './components/batches-details/batches-details.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { SurveyHomeComponent } from './components/survey-home/survey-home.component';
import { ReportsComponent } from './components/reports/reports.component';

const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent},
  { path: 'survey-create', component: SurveyCreateComponent },
  { path: 'survey-manage', component: SurveyManageComponent },
  { path: 'survey-schedule', component: SurveyScheduleComponent },
  { path: 'batches', component: BatchesComponent },
  { path: 'batches-details', component: BatchesDetailsComponent },
  { path: 'survey-home', component: SurveyHomeComponent},
  { path: 'reports', component: ReportsComponent },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
