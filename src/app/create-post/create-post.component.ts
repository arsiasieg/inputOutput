import { Component, EventEmitter, Output} from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Post } from '../shared/model/post.model';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.css']
})
export class CreatePostComponent   {
  createPostForm = this.fb.group({
    text: ['', Validators.required],
    imageUrl: ['', Validators.required],
    author: ['', Validators.required]
  })

  @Output() createPost: EventEmitter<Post> = new EventEmitter<Post>()

  constructor(private fb: FormBuilder){}


  //Créer un poste via les valeurs de l'utilisateur
  createPosts(){
    this.createPost.emit(new Post(
      this.createPostForm.controls.text.value,
      this.createPostForm.controls.imageUrl.value,
      this.createPostForm.controls.author.value
    ))
  }

}
