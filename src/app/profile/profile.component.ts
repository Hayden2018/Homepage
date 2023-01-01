import { Component } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent {

  current: number = 0;

  items: Array<string> = [
    'Test One',
    'Test Two',
    'Test Three',
  ]
}
