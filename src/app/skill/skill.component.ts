import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.css']
})
export class SkillComponent implements OnInit {


  @Input() skillName: string|undefined
  @Input() skillLogo: string|undefined
  @Input() skillSite: string|undefined

  constructor() { 
  }

  ngOnInit(): void {
  }

}
