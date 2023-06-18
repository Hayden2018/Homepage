import { Component, HostListener, OnInit } from '@angular/core';
import { changeMobileStatus } from 'src/app/store/store.action';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(private store: Store) { }

  ngOnInit() {
    this.updateScreenWidth();
  }

  @HostListener('window:resize')
  onResize() {
    this.updateScreenWidth();
  }

  private updateScreenWidth() {
    const isMobile = window.innerWidth <= 768;
    this.store.dispatch(changeMobileStatus(isMobile));
  }
}
