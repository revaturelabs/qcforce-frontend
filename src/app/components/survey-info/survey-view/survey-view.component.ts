import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store'
import * as fromStore from 'src/app/store';

@Component({
  selector: 'app-survey-view',
  templateUrl: './survey-view.component.html',
  styleUrls: ['./survey-view.component.css']
})
export class SurveyViewComponent implements OnInit {
  
  subMenuSelected : string; 

  constructor(private store : Store<fromStore.AppState>) { }

  ngOnInit(): void {
    // this.store.select(fromStore.selectSubnavSelected).subscribe((navSelected) => {
    //   this.subMenuSelected = navSelected;
    // })
  }

}
