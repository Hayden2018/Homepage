import { Component, Input, Output, EventEmitter, SimpleChanges, AfterViewInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements AfterViewInit, OnDestroy {
  @Input() items: Array<string>;
  @Input() current: number = 0;

  isMobile: boolean = false;

  onScreenWidthChange = (): void => {
    if (window.innerWidth <= 768) {
      this.isMobile = true;
    }
    else {
      this.isMobile = false;
    }
  }

  ngAfterViewInit(): void {
    this.onScreenWidthChange();
    window.addEventListener('resize', this.onScreenWidthChange);
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['current']) {
      this.current = changes['current'].currentValue;
    }
  }

  ngOnDestroy(): void {
    window.removeEventListener('resize', this.onScreenWidthChange);
  }

  @Output() changeEvent = new EventEmitter<number>();
  setItem = (i: number): void => {
    this.changeEvent.emit(i);
  }
}
