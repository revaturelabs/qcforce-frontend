/*core imports*/
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

/*ngrx imports*/
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StoreRouterConnectingModule, routerReducer } from '@ngrx/router-store';

/*application components*/
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { SurveyCreateComponent } from './components/survey-info/survey-create/survey-create.component';
import { SurveyManageComponent } from './components/survey-info/survey-manage/survey-manage.component';
import { SurveyScheduleComponent } from './components/survey-info/survey-schedule/survey-schedule.component';
import { BatchesDetailsComponent } from './components/batches/batches-details/batches-details.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { CurriculumComponent } from './components/curriculum/curriculum.component';
import { WeeklyReportsComponent } from './components/reports/weekly-reports//weekly-reports.component';
import { SurveyHomeComponent } from './components/survey-info/survey-home/survey-home.component';
import { BatchReportsComponent } from './components/reports/batch-reports/batch-reports.component';
import { BatchListComponent } from './components/batches/batch-list/batch-list.component';
import { ReportsViewComponent } from './components/reports/reports-view/reports-view.component';
import { FilterItemsComponent } from './components/reports/filter-items/filter-items.component';
import { RatingGraphComponent } from './components/reports/rating-graph/rating-graph.component';
import { PaceGraphComponent } from './components/reports/pace-graph/pace-graph.component';
import { MajorGraphComponent } from './components/reports/major-graph/major-graph.component';
import { SurveyViewComponent } from './components/survey-info/survey-view/survey-view.component';
import { SubnavItemsComponent } from './components/survey-info/subnav-items/subnav-items.component';
import { SurveyQuestionsComponent } from './components/survey-info/survey-questions/survey-questions.component';

/*styling imports*/
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { ChartsModule } from 'ng2-charts';
import { Ng5SliderModule } from 'ng5-slider';

/*util imports*/
import { environment } from '../environments/environment';

/*store imports*/
import * as fromStore from './store';
// import { BatchesEffects } from './store/effects/batches.effect';
// import { ReportsEffect } from './effects/reports.effect';
// import { reportsReducer } from './store/reducers/reports.reducer';
// import { surveysReducer } from './store/reducers/surveys.reducer';
// import { batchesReducer } from './store/reducers/batches.reducer';
//import { reducers, effects } from './store';



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
    ReportsViewComponent,
    FilterItemsComponent,
    RatingGraphComponent,
    PaceGraphComponent,
    MajorGraphComponent,
    SurveyViewComponent,
    SubnavItemsComponent,
    SurveyQuestionsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({
      router: routerReducer,
      reports: fromStore.reportsReducer,
      batches: fromStore.batchesReducer,
      surveys: fromStore.surveysReducer
    }),
    //StoreModule.forFeature('information', reducers),
    EffectsModule.forRoot([
      fromStore.ReportsEffects,
      fromStore.BatchesEffects,
      fromStore.SurveysEffects
    ]),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
    //EffectsModule.forRoot([BatchEffect, ReportsEffect]),
    StoreRouterConnectingModule.forRoot(),
    NgbModule,
    BrowserAnimationsModule,
    MatSlideToggleModule,
    MatCheckboxModule,
    ChartsModule,
    FormsModule,
    HttpClientModule,
    Ng5SliderModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
