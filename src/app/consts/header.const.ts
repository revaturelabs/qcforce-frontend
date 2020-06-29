import { MenuItem } from '../interfaces/menu-item.interface';
import { HeaderState } from '../states/header.state';

/**
 * `INNERHEADERSTATE` (Init Header State)
 *
 * A constant HeaderState value representing the 
 *  initial state of header menus.
 *
 * We see that main menu has three items - Reports, Batches and Surveys -
 *  and the submenu is null.
 *
 *  This constant is used in the Header Reducer to set initial header state
 *
 */
export const INITHEADERSTATE: HeaderState = {
  
  menuList: [
    {
      name: 'Reports',
      routerLink: null,
      active: false,
    },
    {
      name: 'Batches',
      routerLink: null,
      active: false,
    },
    {
      name: 'Surveys',
      routerLink: null,
      active: false,
    },
  ],
  subMenuList: null
};


/**
 * `REPORTSSUBMENU` (Reports Sub Menu)
 *
 * A constant HeaderState value representing the 
 *  submenu you get after clicking Reports in main menu.
 *
 * This constant is used in the Header Reducer to set the HeaderState.submenuList
 *  after a menuClick action corresponding to the menu item Reports being clicked
 *
 */
export const REPORTSSUBMENU: MenuItem[] = [
  {
    name: 'Batch Report',
    routerLink: '/batch-reports',
    active: false,
  },
  {
    name: 'Weekly Report',
    routerLink: '/weekly-reports',
    active: false,
  },
];

/**
 * `BATCHESSUBMENU` (Reports Sub Menu)
 *
 * A constant HeaderState value representing the 
 *  submenu you get after clicking Batches in main menu.
 *
 * This constant is used in the Header Reducer to set the HeaderState.submenuList
 *  after a menuClick action corresponding to the menu item Batches being clicked
 *
 */
export const BATCHESSUBMENU: MenuItem[] = [
  {
    name: 'List of Batches',
    routerLink: '/batch-list',
    active: false,
  },
];

/**
 * `SURVEYSUBMENU` (Reports Sub Menu)
 *
 * A constant HeaderState value representing the 
 *  submenu you get after clicking Surveys in main menu.
 *
 * This constant is used in the Header Reducer to set the HeaderState.submenuList
 *  after a menuClick action corresponding to the menu item Surveys being clicked
 *
 */
export const SURVEYSSUBMENU: MenuItem[] = [
  {
    name: 'Survey Schedule',
    routerLink: null,
    active: false,
  },
  {
    name: 'Update Survey',
    routerLink: null,
    active: false,
  },
];


