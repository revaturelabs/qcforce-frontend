import { Component, OnInit } from '@angular/core';

// import { BatchState } from 'src/app/states/batch.state';
// import { getBatchList } from 'src/app/actions/batch.action';

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
  batches$: Observable<Batch[]>;

  // batchesList: any;

  constructor(private store: Store<fromStore.ReportState>) {}

  ngOnInit(): void {
    // this.batchesList = this.store.select((state) => {
    //   return state.batch.batchList;
    // });
    // this.store.dispatch(getBatchList());

    this.batches$ = this.store.select(fromStore.getAllBatches);
    this.store.dispatch(new fromStore.LoadBatches());
  }

  saveBatchById(batchId: string) {
    localStorage.setItem('batchId', this.batchId = batchId);
  }

}
