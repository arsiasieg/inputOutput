import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-kitchen',
  templateUrl: './kitchen.component.html',
  styleUrls: ['./kitchen.component.css']
})
export class KitchenComponent implements OnInit {
  flourQuantity: number|undefined;
  saltQuantity: number|undefined;
  sugarQuantity: number|undefined;
  eggQuantity: number|undefined;
  numberOfCookies: number|undefined;
  cookiesCooked: number
  cook : boolean|undefined;
  
  constructor() {
    this.cook = false
    this.cookiesCooked = 0
   }

  ngOnInit(): void {
  }

  startCooking(){
  this.cook = true;
  }

  onGetCookies($event:number){
    this.cook = false
    this.cookiesCooked += $event
  }

}
