import { MenuItem } from '../interfaces/menu-item.interface';

/**
 * HeaderState - Objects of this type will hold information about
 *  all the links in the header menu and submenu
 * 
 * This is an interface that is used by NgRx state store to keep track
 *  of the state of the header component.
 *
 */
export interface HeaderState {
  menuList: MenuItem[];
  subMenuList: MenuItem[];
}
