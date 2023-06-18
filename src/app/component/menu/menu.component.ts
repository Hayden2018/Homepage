import { Component, Input, Output, EventEmitter, SimpleChanges, HostListener, ElementRef, ViewChild } from '@angular/core';
import { Store } from '@ngrx/store';
import { hideMobileMenu } from 'src/app/store/store.action';
import { bindState } from 'src/app/utils';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {

  @ViewChild('container', { static: true }) container: ElementRef;

  @Input() items: Array<string>;
  @Input() current: number = 0;

  isMobile: boolean = window.innerWidth <= 768;
  showMenu: boolean = false;
  bind = bindState;

  constructor(private store: Store) {
    this.bind(store, (state: any) => state.menu.showMobileMenu, 'showMenu');
    this.bind(store, (state: any) => state.screen.isMobile, 'isMobile');
  }

  @HostListener('window:click', ['$event'])
  onWindowClick(event: MouseEvent) {
    const clicked = event.target as HTMLElement;
    if (clicked.namespaceURI === 'http://www.w3.org/2000/svg') return; // Check for SVG
    if (!this.container.nativeElement.contains(clicked)) {
      this.store.dispatch(hideMobileMenu());
    }
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['current']) {
      this.current = changes['current'].currentValue;
    }
  }

  @Output() changeEvent = new EventEmitter<number>();
  setItem = (i: number): void => {
    this.changeEvent.emit(i);
    setTimeout(() => this.store.dispatch(hideMobileMenu()), 250);
  }
}
