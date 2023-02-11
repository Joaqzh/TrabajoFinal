import { Component } from '@angular/core';
import { PostService } from '../post.service';
import {NgForm} from "@angular/forms"
import { Post } from '../post.model';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.css']
})
export class CreatePostComponent {
  newPost='';
  inputUser='';
  titulo = '';

  constructor(public postService: PostService){}

  guardarPost(form: NgForm){
    this.postService.addPost(form.value.titulo, form.value.contenido)
    form.resetForm();
  }
}
