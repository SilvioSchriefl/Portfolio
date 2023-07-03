import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.sass']
})
export class SkillsComponent {

  skill_images = [];
  
  constructor() {
    this.skill_images.length = 10;
  }


  onScroll() {
    const elements = document.querySelectorAll('.skill_images');
    elements.forEach((element: any) => {
      const observer = new IntersectionObserver((entries: IntersectionObserverEntry[]) => {
        entries.forEach((entry: IntersectionObserverEntry) => {
          if (entry.isIntersecting ) {          
            element.classList.add('flip-in-hor-bottom');
          }
          if (!entry.isIntersecting ) {          
            element.classList.remove('flip-in-hor-bottom');
          }
        });
      }, {
        threshold: 0.5,
        rootMargin: '0px'
      });
      observer.observe(element);
    });
  }
}
