import { Component, OnInit } from '@angular/core';
import { HeaderState } from "../../states/header.state";
import { MenuItem } from "../../interfaces/menu-item.interface";
import { Observable } from "rxjs";
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  menuList : Observable<MenuItem[]>; 
  subMenuList : Observable<MenuItem[]>; 

  constructor(private store : Store<{header: HeaderState}>) {
    this.menuList = this.store.select(state => state.header.menuList);
    this.subMenuList = this.store.select(state => state.header.subMenuList);
  }

  ngOnInit(): void {
  }

}
