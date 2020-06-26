import { MenuItem } from '../interfaces/menu-item.interface';
import { HeaderState } from '../states/header.state';

export const INITHEADERSTATE: HeaderState = {
  
  menuList: [
    {
      name: 'Reports',
      routerLink: null
    },
    {
      name: 'Batches',
      routerLink: null

    },
    {
      name: 'Surveys',
      routerLink: null
    },
  ],
  subMenuList: null
};

export const REPORTSSUBMENU: MenuItem[] = [
  {
    name: 'Batch Report',
    routerLink: '/batch-reports'
  },
  {
    name: 'Weekly Report by Batch',
    routerLink: null
  },
];

export const BATCHESSUBMENU: MenuItem[] = [
  {
    name: 'List of Batches',
    routerLink: null
  },
];

export const SURVEYSSUBMENU: MenuItem[] = [
  {
    name: 'Survey Schedule',
    routerLink: null
  },
  {
    name: 'Update Survey',
    routerLink: null
  },
];


