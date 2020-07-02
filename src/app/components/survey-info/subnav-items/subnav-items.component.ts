import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store'
import { SurveysState } from 'src/app/states/surveys.state';
import * as SurveysActions from 'src/app/actions/surveys.action';

@Component({
  selector: 'app-subnav-items',
  templateUrl: './subnav-items.component.html',
  styleUrls: ['./subnav-items.component.css']
})
export class SubnavItemsComponent implements OnInit {

  subMenuList : string[];

  constructor(private store : Store<{ surveys: SurveysState }>) { }

  subnavOptionClick(menuItem) {
    this.store.dispatch(SurveysActions.subnavOptionClick({ payload: menuItem }));
  }

  ngOnInit(): void {
    this.store.select((state) => state.surveys.subnavItems).subscribe((navItems) => {
      this.subMenuList = navItems;
    });
  }

}
