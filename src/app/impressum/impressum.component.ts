import { Component } from '@angular/core';
import { CONTACT } from '../contact-data';

@Component({
  selector: 'app-impressum',
  templateUrl: './impressum.component.html',
  styleUrls: ['./impressum.component.sass']
})
export class ImpressumComponent {
  contact = CONTACT
}
