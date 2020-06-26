
/**
 * `MenuItem` (Typescript Interface)
 *
 * Objects of this type will represent information
 * links in the header menu or submenu.
 *
 * This will be used in HeaderState, which will ultimately be used
 *  by the NgRx state store to keep track of the state of the header
 *  component.
 */
export interface MenuItem {
  /**
   * `name` (Field)
   *
   * Represents the name of a menu item 
   * (i.e. What text it will show in the html)
   *
   * It is a string.
   */
  name: string;
  /**
   * `routerLink` (Field)
   *
   * Holds the link that the menuitem routes to, if
   *  menu item is routing to a new page.
   *  If not, then it is null.
   *
   * It is a string (more specifically a relative path name)
   */
  routerLink: string;

  /**
   * `active` (Field)
   *
   * Boolean to indicate whether a menu or submenu item is active
   *
   */
  active: boolean;
}
