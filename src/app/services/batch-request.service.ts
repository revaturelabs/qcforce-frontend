import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { Batch } from '../models/batch.model';

@Injectable({
  providedIn: 'root'
})
export class BatchRequestService {
  readonly url = 'http://localhost:3000/batches';

  constructor(private http: HttpClient) {}

  getBatches(): Observable<Batch[]> {
    return this.http.get<Batch[]>(this.url);
  }
}
