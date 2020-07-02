import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ReportsService {

  getBatches() {
    return this.http.get<any[]>(environment.getBatchUrl);
  }

  getAnswers() {
    return this.http.get<any[]>(environment.getAnswersUrl);
  }

  constructor(private http: HttpClient) { 
        
  }



  

}
