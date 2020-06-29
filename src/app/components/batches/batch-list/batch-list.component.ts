import { Component, OnInit } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
import { Store } from '@ngrx/store';
import { BatchState } from 'src/app/states/batch.state';
import { getBatchList } from 'src/app/actions/batch.action';

@Component({
  selector: 'app-batches',
  templateUrl: './batch-list.component.html',
  styleUrls: ['./batch-list.component.css']
})
export class BatchListComponent implements OnInit {

  batchesList: any;
  url = 'http://localhost:3000/batches';

  constructor(private store : Store<{batch: BatchState}>) { }

  ngOnInit(): void {
    this.store.select((state) => {
      return state.batch.batchList;
    });
    this.store.dispatch(getBatchList());
  }

}