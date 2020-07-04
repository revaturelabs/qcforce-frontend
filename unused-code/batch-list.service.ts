import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class BatchListService {

  url = 'http://localhost:3000/batches';

  constructor(private http: HttpClient) { }

  getBatchList() {
    return this.http.get<object[]>(this.url);
  }
}
