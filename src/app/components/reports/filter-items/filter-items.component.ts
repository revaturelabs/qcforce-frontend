import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store'
import { ReportsState } from '../../../states/reports.state';
import * as ReportsActions from 'src/app/actions/reports.action'; 

@Component({
  selector: 'app-filter-items',
  templateUrl: './filter-items.component.html',
  styleUrls: ['./filter-items.component.css']
})
export class FilterItemsComponent implements OnInit {

  filterOptionDisplayed : string;
  batchFilterOptions : string[];
  batchFilter : string;
  weekFilterOptions : string[];
  weekFilter: string;
  
  subMenuList = [ 'Batch', 'Week' ];

  filterOptionClick(subMenuItem) {
    if (this.filterOptionDisplayed === subMenuItem) {
      this.store.dispatch(ReportsActions.filterDisplayedChange({ payload: "" }));
    } else {
      this.store.dispatch(ReportsActions.filterDisplayedChange({ payload: subMenuItem }));
    }
  }

  batchFilterClick(option) {
    this.store.dispatch(ReportsActions.batchFilterChange({ payload: option }));
    this.store.dispatch(ReportsActions.transformData());
  }

  weekFilterClick(option) {
    this.store.dispatch(ReportsActions.weekFilterChange({ payload: option }));
    this.store.dispatch(ReportsActions.transformData());
  }

  constructor(private store : Store<{ reports: ReportsState }>) { }

  ngOnInit(): void {
    this.store.dispatch(ReportsActions.getBatches());
    this.store.select((state) => state.reports).subscribe((reports) => {
      this.filterOptionDisplayed = reports.filterOptionDisplayed;
      this.batchFilterOptions = reports.batchFilterOptions;
      this.batchFilter = reports.batchFilter;
      this.weekFilterOptions = reports.weekFilterOptions;
      this.weekFilter = reports.weekFilter;
    });
  }

}
