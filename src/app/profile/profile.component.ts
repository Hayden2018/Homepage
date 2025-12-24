import { Component } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent {

  currentSection: number = 0;

  items: Array<string> = [
    'About Me',
    'My Skills',
    'Work Experience',
    'Hobbies',
    'Contact Me',
  ]
}
