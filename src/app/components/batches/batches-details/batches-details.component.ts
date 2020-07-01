import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-batches-details',
  templateUrl: './batches-details.component.html',
  styleUrls: ['./batches-details.component.css']
})
export class BatchesDetailsComponent implements OnInit {

  batchId: string;
  batchesDetails: any = [];
  url = 'http://localhost:3000/batches-details';

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get(this.url)
      .subscribe((batchDetails) => this.batchesDetails = batchDetails);
  }

}
