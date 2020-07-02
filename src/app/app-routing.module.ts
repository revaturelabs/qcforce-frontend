import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { SurveyCreateComponent } from './components/survey-info/survey-create/survey-create.component';
import { SurveyManageComponent } from './components/survey-info/survey-manage/survey-manage.component';
import { SurveyScheduleComponent } from './components/survey-info/survey-schedule/survey-schedule.component';
import { BatchListComponent } from './components/batches/batch-list/batch-list.component';
import { BatchesDetailsComponent } from './components/batches/batches-details/batches-details.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { SurveyHomeComponent } from './components/survey-info/survey-home/survey-home.component';
import { WeeklyReportsComponent } from './components/reports/weekly-reports/weekly-reports.component';
import { BatchReportsComponent } from './components/reports/batch-reports/batch-reports.component';
import { ReportsViewComponent } from './components/reports/reports-view/reports-view.component';


const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent},
  { path: 'survey-create', component: SurveyCreateComponent },
  { path: 'survey-manage', component: SurveyManageComponent },
  { path: 'survey-schedule', component: SurveyScheduleComponent },
  { path: 'batch-list', component: BatchListComponent },
  { path: 'batches-details', component: BatchesDetailsComponent },
  { path: 'survey-home', component: SurveyHomeComponent},
  { path: 'weekly-reports', component: WeeklyReportsComponent },
  { path: 'batch-reports', component: BatchReportsComponent},
  { path: 'batch-reports', component: BatchReportsComponent},
  { path: 'reports', component: ReportsViewComponent},
  { path: '', redirectTo: '/dashboard', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
