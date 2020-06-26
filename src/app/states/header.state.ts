import { MenuItem } from '../interfaces/menu-item.interface';

/**
 * `HeaderState` (NgRx [Sub]state)
 *
 * Objects of this type will hold information about
 *  all the links in the header menu and submenu.
 * 
 * This is an interface that is used by NgRx state store to keep track
 *  of the state of the header component.
 *
 */
export interface HeaderState {
  /**
   * `menuList` (Field)
   *
   * Represents information about the items in the main menu.
   *
   * It is an array of MenuItem interfaces.
   */
  menuList: MenuItem[];
  /**
   * `subMenuList` (Field)
   *
   * Represents information about the items in the sub menu.
   *
   * The submenu items can change based on what main menu items were clicked.
   *
   * It is an array of MenuItem interfaces.
   *
   */
  subMenuList: MenuItem[];
}
