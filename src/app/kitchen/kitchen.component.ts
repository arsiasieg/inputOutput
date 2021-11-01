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
  cookiesCooked: number|undefined
  cook : boolean|undefined;
  
  constructor() { }

  ngOnInit(): void {
  }

  startCooking(){
  this.cook = true;
  }

  onGetCookies($event){
    this.cookiesCooked += $event
  }

}
