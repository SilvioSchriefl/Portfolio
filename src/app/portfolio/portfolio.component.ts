import { Component } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.sass']
})
export class PortfolioComponent {

  projects = {
    name: ['Join', 'El Pollo Loco', 'Simple CRM', 'Ring of fire'],
    image: ['join photo.png', 'Pollo loco.png', 'Simple CRM photo.png', 'Pollo loco.png'],
    languages: ['Angular | TypeScript | HTML | CSS | Firebase', 'Javascript | HTML | CSS', 'Angular | Firebase', 'Angular | Firebase'],
    description: ['Task manager inspired by the Kanban System. Create and organize tasks using drag and drop functions, assign users and categories.', 'A simple Jump-and-Run game based on an object-oriented approach. Help sharkie to find coins and poison bottles to fight against the killer whale.', 'A very Simple Customer Relationship Management system working with CRUD functionality.', 'A very Simple Customer Relationship Management system working with CRUD functionality.'],

  }

}
