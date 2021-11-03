import { Component, Input } from '@angular/core';
import { Post } from '../shared/model/post.model';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent{
  @Input() postChild: Post|undefined

}
