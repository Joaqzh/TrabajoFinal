import { Component } from '@angular/core';
import { PostService } from '../post.service';
import { Post } from '../post.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-list-post',
  templateUrl: './list-post.component.html',
  styleUrls: ['./list-post.component.css']
})
export class ListPostComponent {
  postList: Post[] = [];
  private postSubs: Subscription;
  constructor(public postService: PostService){}

  ngOnInit(): void {
    this.postList = this.postService.getPost();
    this.postSubs = this.postService.getPostUpdatedListener().subscribe((posts: Post[])=>{
    this.postList = posts;
    })
  }

  ngOnDestroy(): void{
    this.postSubs.unsubscribe();
  }

  borrarPost(titulo:string, contenido:string){
    this.postService.deletePost(titulo, contenido)
  }
}
