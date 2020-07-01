import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store'
import { Observable } from 'rxjs';
import { ReportsState } from '../../../states/reports.state';
import { filterDisplayedChange, batchFilterChange, weekFilterChange } from '../../../actions/reports.action'; 

@Component({
  selector: 'app-filter-items',
  templateUrl: './filter-items.component.html',
  styleUrls: ['./filter-items.component.css']
})
export class FilterItemsComponent implements OnInit {

  filterOptionDisplayed : string;
    
  subMenuList = [ 'Batch', 'Week' ];

  filterOptionClick(subMenuItem) {
    if (this.filterOptionDisplayed === subMenuItem) {
      this.store.dispatch(filterDisplayedChange({ payload: "" }));
    } else {
      this.store.dispatch(filterDisplayedChange({ payload: subMenuItem }));
    }
  }

  constructor(private store : Store<{ reports: ReportsState }>) { }

  ngOnInit(): void {
    this.store.select((state) => state.reports.filterOptionDisplayed).subscribe((filterOptionDisplayed) => {
      this.filterOptionDisplayed = filterOptionDisplayed;
    });
  }

}
