import { Component, OnInit } from '@angular/core';
import { HeaderState } from "../../states/header.state";
import { MenuItem } from "../../interfaces/menu-item.interface";
import { menuClick, subMenuClick } from "../../actions/header.action";
import { Observable } from "rxjs";
import { Store } from '@ngrx/store';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  menuList : Observable<MenuItem[]>; 
  subMenuList : Observable<MenuItem[]>; 

  constructor(private router: Router, private store : Store<{header: HeaderState}>) {
    this.menuList = this.store.select(state => state.header.menuList);
    this.subMenuList = this.store.select(state => state.header.subMenuList);
  }
 
  onMenuClick(name: string, routerLink: string) {
    this.store.dispatch(menuClick({ name: name }));
    this.router.navigate([routerLink]);
  }

  onSubMenuClick(name: string, routerLink: string) {
    this.store.dispatch(subMenuClick({ name: name }));
    this.router.navigate([routerLink]);
  }

  ngOnInit(): void {
  }

}
