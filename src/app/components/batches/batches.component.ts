import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-batches',
  templateUrl: './batches.component.html',
  styleUrls: ['./batches.component.css']
})
export class BatchesComponent implements OnInit {

  batchesList: any;
  url = 'http://localhost:3000/batches';

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get(this.url)
      .subscribe((batch) => this.batchesList = batch);
  }

}
