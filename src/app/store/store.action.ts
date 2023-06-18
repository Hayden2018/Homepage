import { createAction } from '@ngrx/store';

export const toggleMobileMenu = createAction('toggle-mobile-menu');
export const showMobileMenu = createAction('show-mobile-menu');
export const hideMobileMenu = createAction('hide-mobile-menu');

export const changeMobileStatus = createAction(
    'screen-change',
    (isMobile: boolean) => ({ isMobile }),
);