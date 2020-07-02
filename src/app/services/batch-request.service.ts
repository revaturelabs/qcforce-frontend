import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

import { Batch } from '../models/batch.model';

@Injectable({
  providedIn: 'root'
})
export class BatchRequestService {
  url: string;

  constructor(private http: HttpClient) {}

  getBatches(): Observable<Batch[]> {
    this.url = 'http://localhost:3100/batches';
    return this.http.get<Batch[]>(this.url);
  }
}
