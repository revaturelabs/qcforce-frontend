import { Component, OnInit } from '@angular/core';

/**
 * `FooterComponent` (Angular Component)
 *
 * This component represents the footer,
 *  which includes text specifying the name of the company.
 *
 */
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
