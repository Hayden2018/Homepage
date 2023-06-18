import { createReducer, on } from '@ngrx/store';
import { toggleMobileMenu, showMobileMenu, hideMobileMenu, changeMobileStatus } from './store.action';
import { menuState, screenState } from './store.state';

export const menuReducer = createReducer(
  menuState,
  on(toggleMobileMenu, (state) => {
    return { showMobileMenu: !state.showMobileMenu }
  }),
  on(showMobileMenu, () => ({ showMobileMenu: true })),
  on(hideMobileMenu, () => ({ showMobileMenu: false })),
);

export const screenReducer = createReducer(
  screenState,
  on(changeMobileStatus, (_, payload) => {
    return { isMobile: payload.isMobile }
  }),
);