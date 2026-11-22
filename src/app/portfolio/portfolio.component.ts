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
    name: ['Videoflix', 'Join', 'El Pollo Loco', 'DA-Bubble', 'Ring of fire'],
    image: ['videoflix.png', 'join photo.png', 'Pollo loco.png', 'DA-Bubble.png', 'ring.png'],
    languages: ['Angular | Typescript | HTML | CSS', 'Angular | Typescript | HTML | CSS',  'Javascript | HTML | CSS', 'Angular | TypeScript | HTML | CSS | Firebase', 'Angular | TypeScript | HTML | CSS | Firebase'],
    description: ["Videoflix is ​​a video platform where you can watch current film trailers. Netflix's little brother" , 'Task manager inspired by the Kanban System. Create and organize tasks using drag and drop functions, assign users and categories.', 'A simple Jump-and-Run game based on an object-oriented approach. Help Pepe to find coins and bottles to fight against the killer chicken.',  'DA-Bubble is a team communication platform that simplifies group messaging and collaboration. It allows teams to communicate in real-time and share files efficiently.', 'Inspired by the card game "Ring of fire", the application provides a great platform to play the game with friends located away from you. Just insert the name, select your icon character and pull the card. Always serve alcohol with moderation!'],
    backend: [true, true, false, false, false],
    // Live-Adresse oder null, wenn das Projekt gerade nicht online ist
    live: [null, 'https://join-sita.pages.dev', 'https://el-pollo-loco-sita.pages.dev', null, null] as (string | null)[],
    git: [
      'https://github.com/SilvioSchriefl/Videoflix',
      'https://github.com/SilvioSchriefl/Join-Angular',
      'https://github.com/SilvioSchriefl/El-Pollo-Loco',
      'https://github.com/SilvioSchriefl/DA-Bubble',
      'https://github.com/SilvioSchriefl/Ring-of-Fire',
    ],
    backendGit: [
      'https://github.com/SilvioSchriefl/backend_videoflix',
      'https://github.com/SilvioSchriefl/Join_Backend',
      null, null, null,
    ] as (string | null)[],
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
    const url = this.projects.live[i]
    if (url) window.open(url, '_blank')
  }

  openGit(i: number) {
    window.open(this.projects.git[i], '_blank')
  }

  openBackEnd(i: number) {
    const url = this.projects.backendGit[i]
    if (url) window.open(url, '_blank')
  }
}
