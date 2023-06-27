import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';




@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.sass']
})
export class ContactComponent {
  [x: string]: any;


  name: string = '';
  name_active: boolean = false;
  email_active: boolean = false;
  message_active: boolean = false;
  email_text: string = '';
  message: string = '';
  email_valid: boolean = false
  regex = new RegExp('^[\\w!#$%&’*+/=?`{|}~^-]+(?:\\.[\\w!#$%&’*+/=?`{|}~^-]+)*@(?:[a-zA-Z0-9-]+\\.)+[a-zA-Z]{2,6}$');
  slide_in:boolean = false
  slide_in2:boolean = false


  changeValue(value: any, inputfield: string) {
    if (inputfield == 'name') this.name = value
    if (inputfield == 'email') {
      this.email_text = value
      this.email_valid = this.regex.test(value)
    }
    if (inputfield == 'message') this.message = value
  }

  setFocus(inputfield: string) {
    if (inputfield == 'name') this.name_active = true
    if (inputfield == 'email') this.email_active = true
    if (inputfield == 'message') this.message_active = true
  }

  sendMessage() {
    if ( !this.email_valid || this.name.length < 1 || this.message.length < 1) return;
    this.slide_in = true
    setTimeout(() => this.slide_in2 = true, 600);
    setTimeout(() => {
      this.name_active = false
      this.email_active = false
      this.message_active = false
      this.email_text = ''
      this.name = ''
      this.message = ''
      this.slide_in = false
      this.slide_in2 = false
      this.email_valid = false
    } , 5100);
  }
}
