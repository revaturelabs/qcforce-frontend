import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';

import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { EffectsModule } from '@ngrx/effects';
import { StoreRouterConnectingModule, routerReducer } from '@ngrx/router-store';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { SurveyCreateComponent } from './components/survey-info/survey-create/survey-create.component';
import { SurveyManageComponent } from './components/survey-info/survey-manage/survey-manage.component';
import { SurveyScheduleComponent } from './components/survey-info/survey-schedule/survey-schedule.component';
import { batchReducer } from './reducers/batch.reducer';
import { BatchesDetailsComponent } from './components/batches/batches-details/batches-details.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { CurriculumComponent } from './components/curriculum/curriculum.component';
import { WeeklyReportsComponent } from './components/reports/weekly-reports//weekly-reports.component';
import { SurveyHomeComponent } from './components/survey-info/survey-home/survey-home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { ChartsModule } from 'ng2-charts';
import { FormsModule } from '@angular/forms';
import { BatchEffect } from './effects/batch.effect';
import { headerReducer } from "./reducers/header.reducer";
import { BatchReportsComponent } from './components/reports/batch-reports/batch-reports.component';
import { BatchListComponent } from './components/batches/batch-list/batch-list.component';
import { surveysReducer} from './store/reducers/surveys.reducer';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    SurveyCreateComponent,
    SurveyManageComponent,
    SurveyScheduleComponent,
    SurveyHomeComponent,
    BatchListComponent,
    BatchesDetailsComponent,
    DashboardComponent,
    CurriculumComponent,
    WeeklyReportsComponent,
    BatchReportsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({
      header: headerReducer,
      router: routerReducer,
      batch: batchReducer,
      surveys: surveysReducer,
    }),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
    EffectsModule.forRoot([BatchEffect]),
    StoreRouterConnectingModule.forRoot(),
    NgbModule,
    BrowserAnimationsModule,
    MatSlideToggleModule,
    MatCheckboxModule,
    ChartsModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
