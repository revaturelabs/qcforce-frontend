import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Batch } from '../models/batch.model';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BatchesService {

  batchName: string;

  constructor(private http: HttpClient) {}

  getBatches(): Observable<Batch[]> {
    return this.http.get<Batch[]>(
        environment.getBatchListUrl,
    //     { headers: {  'Access-Control-Allow-Origin' : 'http://ec2-18-219-219-28.us-east-2.compute.amazonaws.com:8086',
    //                   'Access-Control-Allow-Method' : 'GET, POST, PUT',
    //                   'Access-Control-Allow-Headers' : 'Content-Type',
    //                   'Content-Type' : 'application/json; charset=UTF-8'},
    //                   responseType: 'json',
    // }
    );
  }
  getSurveysByBatchId(batchId: string): Observable <any> {
    const url = environment.getSurveysByBatchIdUrl + '?batchId=' + batchId;
    return this.http.get<any>(url);
  }

  getAssociateByBatchName(batchName: string): Observable <any> {
    const url = environment.getAssociateByBatchName + batchName;
    return this.http.get<any>(url);
  }
}
