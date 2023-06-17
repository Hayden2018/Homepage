import { createReducer, on } from '@ngrx/store';
import { toggleMobileMenu, showMobileMenu, hideMobileMenu } from './store.action';
import { initialState } from './store.state';

export const menuReducer = createReducer(
  initialState,
  on(toggleMobileMenu, (state) => ({ showMobileMenu: !state.showMobileMenu })),
  on(showMobileMenu, () => ({ showMobileMenu: true })),
  on(hideMobileMenu, () => ({ showMobileMenu: false })),
);