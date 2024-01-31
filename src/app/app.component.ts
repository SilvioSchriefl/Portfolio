import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'Silvio Schriefl';

  constructor() {
    document.title = 'Silvio Schriefl';
  }
}
