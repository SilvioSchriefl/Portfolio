import { Component } from '@angular/core';
import { CONTACT } from '../contact-data';




@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.sass']
})
export class ContactComponent {


  contact = CONTACT


  onScroll() {
    const elements = document.querySelectorAll('.input_div, .got_problem_div');
    elements.forEach((element: any) => {
      const observer = new IntersectionObserver((entries: IntersectionObserverEntry[]) => {
        entries.forEach((entry: IntersectionObserverEntry) => {
          const classes = entry.target.classList
          if (classes.contains('got_problem_div')) classes.toggle('bounce-in-left', entry.isIntersecting)
          if (classes.contains('input_div')) classes.toggle('scale-in-center', entry.isIntersecting)
        });
      }, {
        threshold: 0.0,
      });
      observer.observe(element);
    });
  }


  scrollUp() {
    location.href = "#header";
  }
}
