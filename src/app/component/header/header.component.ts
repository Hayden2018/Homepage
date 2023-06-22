import { Component, OnInit } from '@angular/core'
import { Store } from '@ngrx/store';
import { toggleMobileMenu } from 'src/app/store/store.action';
import { bindState } from 'src/app/utils';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  isMobile: boolean = window.innerWidth <= 768;
  bind = bindState;

  constructor(private store: Store) {
    this.bind(store, (state: any) => state.screen.isMobile, 'isMobile');
  }

  state = ['inactive', 'inactive'];

  ngOnInit(): void {
    if (window.location.pathname.includes('/profile')) {
      this.state[0] = 'active';
    }
    else if (window.location.pathname.includes('/work')) {
      this.state[1] = 'active';
    }
    else {
      this.state[0] = 'active';
    }
  }

  selectTab = (index: number): void => {
    this.state = ['inactive', 'inactive'];
    if (this.state[index] !== 'active') {
      this.state[index] = 'active';
    }
  }

  toggleMenu = (): void => {
    this.store.dispatch(toggleMobileMenu());
  }
}
