import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ReportsService {

  getBatchUrl = environment.getBatchUrl;

  getBatches() {
    return this.http.get<any[]>(this.getBatchUrl);
  }

  constructor(private http: HttpClient) { 
        
  }



  

}
