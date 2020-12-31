import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-navbar',
  templateUrl: './admin-navbar.component.html',
  styleUrls: ['./admin-navbar.component.css']
})
export class AdminNavbarComponent implements OnInit {

  menuList = [
    {
      name: 'Admin',
      routerLink: '/admin'
    },
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
