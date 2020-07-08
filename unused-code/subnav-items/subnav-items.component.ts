import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store'
import * as fromStore from 'src/app/store';

@Component({
  selector: 'app-subnav-items',
  templateUrl: './subnav-items.component.html',
  styleUrls: ['./subnav-items.component.css']
})
export class SubnavItemsComponent implements OnInit {

  subMenuList : string[];

  constructor(private store : Store<{ surveys: fromStore.SurveysState }>) { }

  subnavOptionClick(menuItem) {
    this.store.dispatch(new fromStore.SubnavOptionClick(menuItem));
  }

  ngOnInit(): void {
    this.store.select((state) => state.surveys.subnavItems).subscribe((navItems) => {
      this.subMenuList = navItems;
    });
  }

}
