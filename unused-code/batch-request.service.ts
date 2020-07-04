import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

import { Batch } from '../models/batch.model';

import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BatchRequestService {
  url: string;

  constructor(private http: HttpClient) {}

  getBatches(): Observable<Batch[]> {
    this.url = environment.getBatchListUrl;
    return this.http.get<Batch[]>(this.url);
  }
}
