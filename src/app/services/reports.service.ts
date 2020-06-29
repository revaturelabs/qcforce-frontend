import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BatchReportsComponent } from '../components/reports/batch-reports/batch-reports.component';
import {CurriculumReportsComponent } from '../components/reports/curriculum-reports/curriculum-reports.component';
import { TrainerReportsComponent } from '../components/reports/trainer-reports/trainer-reports.component';
import { WeeklyReportsComponent } from '../components/reports/weekly-reports/weekly-reports.component';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})
export class ReportsService {

  private reportsUrl: string;

  constructor(private http: HttpClient) { 
    this.reportsUrl = 'http://localhost:8080/reports';
  }


  public getWeeklyReport() {
    console.log('Weekly Report given');
  }

  

}
