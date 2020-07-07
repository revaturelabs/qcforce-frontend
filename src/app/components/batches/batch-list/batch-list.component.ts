import { Component, OnInit } from '@angular/core';

import { Batch } from '../../../models/batch.model';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as fromStore from '../../../store';

@Component({
  selector: 'app-batches',
  templateUrl: './batch-list.component.html',
  styleUrls: ['./batch-list.component.css']
})
export class BatchListComponent implements OnInit {

  batchId: string;
  batchName: string;
  batches$: Observable<Batch[]>;

  constructor(private store: Store<fromStore.AppState>) {}

  ngOnInit(): void {
    this.batches$ = this.store.select(fromStore.selectAllBatches);
    this.store.dispatch(new fromStore.LoadBatches());
  }

  saveBatchById(batchId: string) {
    localStorage.setItem('batchId', this.batchId = batchId);
  }

  saveBatchByBatchName(batchName: string) {
    localStorage.setItem('batchName', this.batchName = batchName);
  }
}
