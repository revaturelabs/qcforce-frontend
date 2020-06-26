import { createAction, props } from '@ngrx/store';

export const menuClick = createAction("[Header] Menu Item Clicked", props<{ name: string }>());
export const subMenuClick = createAction("[Header] Submenu Item Clicked", props<{ name: string }>());

