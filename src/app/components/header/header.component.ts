import { Component, OnInit } from '@angular/core';
/**
 * `HeaderComponent` (Angular Component)
 *
 * This component represents the Header,
 *  which includes logo and routers to reports, views, and surveys.
 *
 */
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  menuList = [
    {
      name: 'Reports',
      routerLink: '/reports'
    },
    {
      name: 'Batches',
      routerLink: '/batch-list',
    },
    {
      name: 'Surveys',
      routerLink: '/surveys',
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
