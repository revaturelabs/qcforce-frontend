import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromStore from 'src/app/store';

@Component({
  selector: 'app-filter-items',
  templateUrl: './filter-items.component.html',
  styleUrls: ['./filter-items.component.css']
})
export class FilterItemsComponent implements OnInit {

  filterOptionDisplayed: string;
  batchFilterOptions: string[];
  batchFilter: string;
  weekFilterOptions: string[];
  weekFilter: string;

  subMenuList = [ 'Batch', 'Week' ];

  batchFilterClick(option) {
    this.store.dispatch(new fromStore.BatchFilterChange(option));
    if (this.weekFilter === 'All' && option !== 'Average') {
      this.store.dispatch(new fromStore.GetAllWeeksOneBatch(option));
    }
  }

  weekFilterClick(option) {
    this.store.dispatch(new fromStore.WeekFilterChange(option));
    if (option === 'All' && this.batchFilter !== 'Average') {
      this.store.dispatch(new fromStore.GetAllWeeksOneBatch(this.batchFilter));
    }
  }

  constructor(private store: Store<fromStore.AppState>) { }

  ngOnInit(): void {
    this.store.dispatch(new fromStore.GetBatches());
    this.store.dispatch(new fromStore.GetWeeks());
    this.store.select(fromStore.selectReportsState).subscribe((reports) => {
      this.filterOptionDisplayed = reports.filterOptionDisplayed;
      this.batchFilterOptions = reports.batchFilterOptions;
      this.batchFilter = reports.batchFilter;
      this.weekFilterOptions = reports.weekFilterOptions;
      this.weekFilter = reports.weekFilter;
    });
  }

}
