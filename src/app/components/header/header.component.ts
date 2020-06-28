import { Component, OnInit } from '@angular/core';
import { HeaderState } from "../../states/header.state";
import { MenuItem } from "../../interfaces/menu-item.interface";
import { menuClick, subMenuClick } from "../../actions/header.action";
import { Observable } from "rxjs";
import { Store } from '@ngrx/store';
import { Router } from '@angular/router';

/**
 * `HeaderComponent` (Angular Component)
 *
 * This component represents the header,
 *  which includes the Revature Logo, 
 *  the menu items (Reports, Batches, Surveys),
 *  the submenu tab items and the logout button.
 * 
 * This component uses NgRx HeaderState object to represent
 *  what are the menu items and submenu tab items to show at any given page,
 *  and whether they are active or not.
 *
 * This component also dispatches menuClick and subMenuClick actions
 *  to the NgRx state store whenever a user clicks on a menu item or submenu tab.
 *
 */

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  /**
   * `menuList` (Field)
   *
   * This is an observable for a MenuItem array - representing the main menu items.
   *
   * The MenuItem array can change asynchronously, and that is
   * represented as an observable - a stream of MenuItem array values
   * which the DOM elements can subscribe to.
   */
  menuList : Observable<MenuItem[]>;

  /**
   * `subMenuList` (Field)
   *
   * This is an observable for a MenuItem array - representing submenu items.
   *
   * The MenuItem array can change asynchronously, and that is
   * represented as an observable - a stream of MenuItem array values
   * which the DOM elements can subscribe to.
   */
  subMenuList : Observable<MenuItem[]>; 

  /**
   * `constructor` (Constructor)
   *
   * @param{ Router } router (Angular Router Dependency Injection)
   * @param{ Store<> } store (NgRx Store Dependency Injection)
   */
  constructor(private router: Router, private store : Store<{header: HeaderState}>) { }
 
  /**
   * `onMenuClick` (event handler)
   *
   * @param{ string } name
   * @param{ string } routerLink
   *
   * Dispatches a menuClick action with payload equal to name and 
   *  router navigates if routerLink is not null.
   */
  onMenuClick(name: string, routerLink: string) {
    this.store.dispatch(menuClick({ name: name }));
    if (routerLink) {
      this.router.navigate([routerLink]);
    }
  }

  /**
   * `onsubMenuClick` (event handler)
   *
   * @param{ string } name
   * @param{ string } routerLink
   *
   * Dispatches a subMenuClick action with payload equal to name and 
   *  router navigates if routerLink is not null.
   */
  onSubMenuClick(name: string, routerLink: string) {
    this.store.dispatch(subMenuClick({ name: name }));
    if (routerLink) {
      this.router.navigate([routerLink]);
    }
  }

  /**
   * `ngOnInit` (Lifecycle Hook)
   *
   * Sets the `menuList` and `subMenuList` fields as observables
   *  that are emitting the values of state.header.menuList and
   *  state.header.subMenuList respectively
   */
  ngOnInit(): void {
    this.menuList = this.store.select(state => state.header.menuList);
    this.subMenuList = this.store.select(state => state.header.subMenuList);
  }

}
