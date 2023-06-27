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

}
