import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  onomatopoeias: string[]

  constructor(){
    this.onomatopoeias = ["Bam"]
  }

  onReceiveNewOnomatopia($event:string){
    this.onomatopoeias.push($event)
  }
}
