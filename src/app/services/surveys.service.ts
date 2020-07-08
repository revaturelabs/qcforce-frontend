import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { env } from 'process';

@Injectable({
  providedIn: 'root'
})
export class SurveysService {

  constructor(private http: HttpClient) { }

  postSync() {
    this.http.post(environment.postSyncService, '');
  }
}
