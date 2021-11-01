import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-magic-oven',
  templateUrl: './magic-oven.component.html',
  styleUrls: ['./magic-oven.component.css']
})
export class MagicOvenComponent implements OnInit {
  @Input() startCooking : boolean|undefined
  @Input() numberOfCookies : number|undefined
  @Input() flour: number|undefined
  @Input() salt: number|undefined
  @Input() sugar: number|undefined
  @Input() egg: number|undefined

  @Output() getCookies:EventEmitter<number> = new EventEmitter<number>(); 

  sendCookies(){
    this.getCookies.emit(this.numberOfCookies)
  }

  constructor() { }

  ngOnInit(): void {
  }

}
