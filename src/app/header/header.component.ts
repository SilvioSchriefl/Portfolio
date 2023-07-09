import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent {

  menu_open: boolean = false;

  openMenu() {
    if (!this.menu_open) {
      this.menu_open = true
      document.body.style.overflowY = 'hidden';
    }
    else {
      this.menu_open = false
      document.body.style.overflowY = '';
    }
  }


  closeMenu() {
    this.menu_open = false
    document.body.style.overflowY = '';
  }
}
