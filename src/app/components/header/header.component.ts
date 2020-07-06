import { Component, OnInit } from '@angular/core';

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
