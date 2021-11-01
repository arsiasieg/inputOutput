import { Component, Input, OnInit, Output } from '@angular/core';
import { EventEmitter } from 'stream';

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

  @Output() getCookies:EventEmitter<any> = new EventEmitter(); 

  sendCookies(){
    this.getCookies.emit(this.numberOfCookies)
  }

  constructor() { }

  ngOnInit(): void {
  }

}
