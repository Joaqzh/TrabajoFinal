import { Injectable } from "@angular/core";
import { Post } from "./post.model";
import { Subject } from "rxjs";

@Injectable({providedIn: 'root'})
export class PostService{
  private posts: Post[] = [];
  private postsUpdated = new Subject<Post[]>();

  getPost(){
    return [...this.posts];
  }

  getPostUpdatedListener(){
    return this.postsUpdated.asObservable();
  }

  addPost(titulo: string, contenido: string){
    const post: Post = {titulo:titulo, contenido: contenido, visible: 'true'};
    this.posts.push(post);
    this.postsUpdated.next([...this.posts]);
  }

  deletePost(titulo: string, contenido: string){

    this.posts.forEach((element:any)=>{

      if(element.titulo == titulo && element.contenido == contenido){
        console.log('Nicolle')
        element.visible = 'false'
      }
    })

    console.log(titulo);
    console.log(contenido)
  }
}
