
/**
 * MenuItem - Objects of this type will represent information
 * links in the header menu or submenu
 *
 * This will be used in HeaderState, which will ultimately be used
 *  by the NgRx state store to keep track of the state of the header
 *  component
 */

export interface MenuItem {
  name: string;
  //action: HeaderAction;
  routerLink: string;
}
