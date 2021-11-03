import { Component, OnInit } from '@angular/core';
import { Post } from '../shared/model/post.model';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  listPosts: Post[]

  constructor() {
    this.listPosts = []
   }

   ngOnInit(): void{
    this.listPosts.push(
    new Post("blabla bla", "url image", "John Doe"),
    new Post("nouveau bla", "image", "Andy Doe"),
    new Post("let's go !", "image2", "Sandra Doe"))
   }

  //Ajouter un post
   addPost(post: Post){
    this.listPosts.push(post)
   }

}
