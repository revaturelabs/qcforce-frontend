import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store'
import * as fromStore from 'src/app/store';

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
      this.store.dispatch(new fromStore.FilterDisplayedChange(""));
    } else {
      this.store.dispatch(new fromStore.FilterDisplayedChange(subMenuItem));
    }
  }

  batchFilterClick(option) {
    this.store.dispatch(new fromStore.BatchFilterChange(option));
    //this.store.dispatch(fromStore.TransformData());
  }

  weekFilterClick(option) {
    this.store.dispatch(new fromStore.WeekFilterChange(option));
    //this.store.dispatch(ReportsActions.transformData());
  }

  constructor(private store : Store<{ reports: fromStore.ReportsState }>) { }

  ngOnInit(): void {
    this.store.dispatch(new fromStore.GetBatches());
    this.store.select((state) => state.reports).subscribe((reports) => {
      this.filterOptionDisplayed = reports.filterOptionDisplayed;
      this.batchFilterOptions = reports.batchFilterOptions;
      this.batchFilter = reports.batchFilter;
      this.weekFilterOptions = reports.weekFilterOptions;
      this.weekFilter = reports.weekFilter;
    });
  }

}
