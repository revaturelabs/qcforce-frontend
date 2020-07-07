import { Component, OnInit, OnDestroy } from '@angular/core';

import { Associate } from '../../../models/associate.model';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as fromStore from '../../../store';

@Component({
  selector: 'app-batches-details',
  templateUrl: './batches-details.component.html',
  styleUrls: ['./batches-details.component.css']
})
export class BatchesDetailsComponent implements OnInit, OnDestroy {

  batchName: string;

  associates$: Observable<Associate[]>;

  constructor(private store: Store<fromStore.AppState>) {}

  ngOnInit(): void {
    this.batchName = localStorage.getItem('batchName');

    this.associates$ = this.store.select(fromStore.selectAllAssociates);
    this.store.dispatch(new fromStore.LoadAssociates(this.batchName));
    }
  ngOnDestroy(): void {
    localStorage.clear();
  }
}
