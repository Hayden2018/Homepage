import { Component, OnInit } from '@angular/core'
import { Store } from '@ngrx/store';
import { toggleMobileMenu } from 'src/app/store/store.action';
import { bindState } from 'src/app/utils';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  isMobile: boolean = window.innerWidth <= 768;
  bind = bindState;

  constructor(private store: Store, private router: Router) {
    this.bind(store, (state: any) => state.screen.isMobile, 'isMobile');
  }

  state = ['inactive', 'inactive'];

  ngOnInit(): void {
    this.router.events
    .pipe(filter(event => event instanceof NavigationEnd))
    .subscribe((event: NavigationEnd) => {
      if (event.url.includes('work')) {
        this.state[0] = 'inactive';
        this.state[1] = 'active';
      }
      else {
        this.state[1] = 'inactive';
        this.state[0] = 'active';
      }
    });
  }

  toggleMenu = (): void => {
    this.store.dispatch(toggleMobileMenu());
  }
}
