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

  pullDataActions(batch, week) {
    if (week === 'Average' && batch === 'Average') {
      this.store.dispatch(new fromStore.GetAvgWeekBatch());
    }
    else if (week === 'All' && batch !== 'Average') {
      this.store.dispatch(new fromStore.GetAllWeeksOneBatch(batch));
    } 
    else if (week !== 'Average' && batch !== 'Average') {
      this.store.dispatch(new fromStore.GetOneWeekOneBatch({ batch, week }));
    }
  }


  batchFilterClick(option) {
    this.store.dispatch(new fromStore.BatchFilterChange(option));
    this.pullDataActions(option, this.weekFilter);
  }

  weekFilterClick(option) {
    this.store.dispatch(new fromStore.WeekFilterChange(option));
    this.pullDataActions(this.batchFilter, option);
  }

  constructor(private store: Store<fromStore.AppState>) { }

  ngOnInit(): void {
    this.store.select(fromStore.selectReportsState).subscribe((reports) => {
      this.filterOptionDisplayed = reports.filterOptionDisplayed;
      this.batchFilterOptions = reports.batchFilterOptions;
      this.batchFilter = reports.batchFilter;
      this.weekFilterOptions = reports.weekFilterOptions;
      this.weekFilter = reports.weekFilter;
    });
  }

}
