import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-filter-items',
  templateUrl: './filter-items.component.html',
  styleUrls: ['./filter-items.component.css']
})
export class FilterItemsComponent implements OnInit {

  subMenuList = [
    {
      name: 'Batch',
      active: false
    }, 
    {
      name: 'Week',
      active: false
    }
  ];

  pickFilter(name) {
    for (let menuItem of this.subMenuList) {
      if (menuItem.name === name) {
        menuItem.active = !menuItem.active;
      } else {
        menuItem.active = false;
      }
    }
  }

  constructor() { }

  ngOnInit(): void {
  }

}
