import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {
  @Input() side: string;
  @Input() top: number = 0;
  @Input() items: Array<string>;

  current: number = 0;
  @Output() changeEvent = new EventEmitter<number>();

  setItem = (i: number) => {
    this.current = i;
    this.changeEvent.emit(i);
  }
}
