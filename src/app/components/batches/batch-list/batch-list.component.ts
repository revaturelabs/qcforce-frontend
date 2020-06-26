import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-batches',
  templateUrl: './batch-list.component.html',
  styleUrls: ['./batch-list.component.css']
})
export class BatchListComponent implements OnInit {

  batchesList: any;
  url = 'http://localhost:3000/batches';

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get(this.url)
      .subscribe((batch) => this.batchesList = batch);
  }

}