import { MenuItem } from '../interfaces/menu-item.interface';
import { HeaderState } from '../states/header.state';

export const INITHEADERSTATE: HeaderState = {
  menuList: [
    {
      name: 'Reports'
    },
    {
      name: 'Batches'
    },
    {
      name: 'Surveys'
    },
  ],
  subMenuList: null
};

export const REPORTSSUBMENU: MenuItem[] = [
  {
    name: 'Batch Report'
  },
  {
    name: 'Weekly Report by Batch'
  },
];

export const BATCHESSUBMENU: MenuItem[] = [
  {
    name: 'List of Batches'
  },
];

export const SURVEYSSUBMENU: MenuItem[] = [
  {
    name: 'Survey Schedule'
  },
  {
    name: 'Update Survey'
  },
];


