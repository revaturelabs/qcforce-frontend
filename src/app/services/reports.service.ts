import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { ReportsState } from '../store/states/reports.state';
import { Observable } from 'rxjs';
import { Report } from '../models/reports.model';

@Injectable({
  providedIn: 'root'
})
export class ReportsService {


  getBatches(): Observable<string[]> {
    return this.http.get<string[]>(environment.getBatchUrl);
  }

  getWeeks(): Observable<string[]> {
    return this.http.get<string[]>(environment.getWeeksUrl);
  }

  getBatchAllWeeks(batch) {
    return this.http.get<Report[]>(environment.getBatchAllWeeks + batch);
  }

  getWeekAllBatches(week) {
    return this.http.get<Report[]>(environment.getWeekAllUrl + week);
  }

  getOneBatchOneWeek(batch, week) {
    return this.http.get<Report>(environment.getOneBatchOneWeek + batch + '/' + week);
  }

  getAvgWeekBatch() {
    return this.http.get<Report>(environment.getAvgWeekBatch);
  }

  constructor(private http: HttpClient) { }

}
