import { createAction, props } from '@ngrx/store';

/** 
 * `menuClick` (NgRx Action)
 *
 * This object is an NgRx Action object which can be dispatched
 *  to the state store.
 *
 * It represents the action of clicking on a main menu item.
 *
 * It takes in a payload, namely an object with the name of the menu item you clicked.
 *
 */
export const menuClick = createAction('[Header] Menu Item Clicked', props<{ name: string }>());

/**
 * `subMenuClick` (NgRx Action)
 *
 * This object is an NgRx Action object which can be dispatched
 *  to the state store.
 *
 * It represents the action of clicking on a submenu item.
 *
 * It takes in a payload, namely an object with the name of the submenu item you clicked.
 *
 */
export const subMenuClick = createAction('[Header] Submenu Item Clicked', props<{ name: string }>());

