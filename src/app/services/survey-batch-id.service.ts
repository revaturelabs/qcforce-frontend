import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SurveyBatchIdService {
  url = 'http://localhost:3001/surveys';

  constructor(private http: HttpClient) {}

  getSurveysByBatchId(batchId: string): Observable <any> {
    this.url = this.url + '?batchId=' + batchId;
    return this.http.get<any>(this.url);
  }
}
