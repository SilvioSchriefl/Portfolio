import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent {

  menu_open:boolean = false

  setOverflowHidden() {
    document.body.classList.add('overflow_hidden');
  }
}
