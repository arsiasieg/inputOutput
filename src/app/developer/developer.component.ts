import { Component, OnInit } from '@angular/core';
import { Developer } from '../common/developper.model';
import { Skill } from '../common/skill.model';

@Component({
  selector: 'app-developer',
  templateUrl: './developer.component.html',
  styleUrls: ['./developer.component.css']
})
export class DeveloperComponent implements OnInit {

  developer: Developer

  constructor() {
    this.developer = new Developer("Lucas", 
    "Camille", 
    29, 
    "Femme", 
    "Je suis en formation de développeuse Web.",
    [new Skill("Java", "https://logos-marques.com/wp-content/uploads/2021/03/Java-Logo.png", "https://www.java.com/fr/"),
      new Skill("Angular", "http://assets.stickpng.com/images/5847ea22cef1014c0b5e4833.png", "https://angular.io/"),])
   }

  ngOnInit(): void {
    this.developer
  }

}
