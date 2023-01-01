import { Component } from '@angular/core'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  state = ['active', 'inactive']

  selectTab = (index: number) => {
    this.state = ['inactive', 'inactive']
    this.state[index] = 'active'
  }
}
