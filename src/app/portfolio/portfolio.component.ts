import { Component } from '@angular/core';




@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.sass']
})
export class PortfolioComponent {

  options = {

    rootMargin: "0px",
    threshold: 1.0,
  };
  projects = {
    name: ['Join', 'El Pollo Loco', 'Simple CRM', 'Ring of fire'],
    image: ['join photo.png', 'Pollo loco.png', 'DA-Bubble.png', 'ring.png'],
    languages: ['Angular | TypeScript | HTML | CSS | Firebase', 'Javascript | HTML | CSS', 'Angular | TypeScript | HTML | CSS | Firebase', 'Angular | Typescript | HTML | CSS | Firebase'],
    description: ['Task manager inspired by the Kanban System. Create and organize tasks using drag and drop functions, assign users and categories.', 'A simple Jump-and-Run game based on an object-oriented approach. Help Pepe to find coins and bottles to fight against the killer chicken.', 'DA-Bubble is a team communication platform that simplifies group messaging and collaboration. It allows teams to communicate in real-time and share files efficiently.', 'Inspired by the card game "Ring of fire", the application provides a great platform to play the game with friends located away from you. Just insert the name, select your icon character and pull the card. Always serve alcohol with moderation!'],
  }


  onScroll() {
    const elements = document.querySelectorAll('.project');
    elements.forEach((element: any) => {
      const observer = new IntersectionObserver((entries: IntersectionObserverEntry[]) => {
        entries.forEach((entry: IntersectionObserverEntry) => {
          if (entry.isIntersecting && entry.target.getAttribute('class') == 'project')  element.classList.add('slide_in_right');  
          if (!entry.isIntersecting && entry.target.getAttribute('class') == 'project slide_in_right') element.classList.remove('slide_in_right'); 
          if (entry.isIntersecting && entry.target.getAttribute('class') == 'project flex_direction') element.classList.add('slide_in_left');  
          if (!entry.isIntersecting && entry.target.getAttribute('class') == 'project flex_direction slide_in_left') element.classList.remove('slide_in_left');    
        });
      }, {
        threshold: 0.3,
        rootMargin: '0px'
      });
      observer.observe(element);
    });
  }


  openSite(i: number) {
    if (i == 0) window.open('https://join.silvio-schriefl.de/', '_blank')
    if (i == 1) window.open('https://el-pollo-loco.silvio-schriefl.de/', '_blank')
    if (i == 2) window.open('https://da-bubble.silvio-schriefl.de/', '_blank')
    if (i == 3) window.open('https://ring-of-fire.silvio-schriefl.de/', '_blank')
  }

  openGit(i: number) {
    if (i == 0) window.open('https://github.com/SilvioSchriefl/join.git', '_blank')
    if (i == 1) window.open('https://github.com/SilvioSchriefl/El-Pollo-Loco.git', '_blank')
    if (i == 2) window.open('https://github.com/SilvioSchriefl/DABubble.git', '_blank')
    if (i == 3) window.open('https://github.com/SilvioSchriefl/Ring-of-Fire.git', '_blank')
  }
}


