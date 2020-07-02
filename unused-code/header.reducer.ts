import { Action, createReducer, on } from "@ngrx/store";
import { menuClick, subMenuClick } from "../actions/header.action";
import { INITHEADERSTATE, REPORTSSUBMENU, SURVEYSSUBMENU, BATCHESSUBMENU } from "../consts/header.const"; 
import { HeaderState } from '../states/header.state';
import { cloneDeep } from 'lodash';

/**
 * `_headerReducer` (NgRx inner reducer)
 *
 * This is a reducer used by NgRx to process header actions to modify
 *  the header state
 * 
 * This reducer changes the header state (menu and submenu lists) to 
 *  respond to a menu and submenu clicks 
 *
 */
const _headerReducer = createReducer(
  INITHEADERSTATE,
  on(menuClick, (state, { name }) => {
    let newState = cloneDeep(INITHEADERSTATE);
    if (name === 'Reports') {
      newState.menuList[0].active = true;
      newState.subMenuList = REPORTSSUBMENU;
    } else if (name === 'Batches') {
      newState.menuList[1].active = true;
      newState.subMenuList = BATCHESSUBMENU;
    } else if (name === 'Surveys') {
      newState.menuList[2].active = true;
      newState.subMenuList = SURVEYSSUBMENU;
    } 
    return newState;
  }),
  on(subMenuClick, (state, { name }) => {
    let newState = cloneDeep(state);
    for (let i = 0; i < newState.subMenuList.length; i++) {
      if (newState.subMenuList[i].name === name) {
        newState.subMenuList[i].active = true;
      } else {
        newState.subMenuList[i].active = false;
      }
    }
    return newState;
  })
);


/** 
 * `headerReducer` (NgRx reducer)
 *
 * This function is a wrapper for `_headerReducer`.
 *
 * To be honest, I am not sure why I need this wrapper,
 *  but I am following the convention given by the NgRx docs.
 *
 *  @param {HeaderState} state The Current State of the header
 *  @param { Action } action The Action dispatched by the header component
 *
 *  @returns { HeaderState } The new state of the header
 */
export function headerReducer(state: HeaderState | undefined, action: Action) {
  return _headerReducer(state, action);
}
