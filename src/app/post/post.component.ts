import { Component, OnInit } from '@angular/core';
import { PostService } from '../services/post.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  moduleId: module.id,
  selector: 'posts',
  templateUrl: 'post.component.html',
  styleUrls: ['post.component.css'],
  providers: [PostService]
})
export class PostComponent implements OnInit {
  posts: Object;
  error: string;
  id: number;
  cat: number;

  constructor(
    private _postService: PostService,
    private _router: ActivatedRoute
  ) { }

  ngOnInit() {
    
        this._router.params.subscribe(
          params => {
            this.id = params['id'];
            this.cat = params['cat'];
          }
        );
        
        if(this.id){
          this._postService.getSpec(this.id).subscribe(
            response => {
              if(response["error"]) { this.error = response["error"] }
              else { this.posts = response["posts"]; } 
            }  
          );
        } else if(this.cat) { 
          this._postService.getCat(this.cat).subscribe(
            response => {
              if(response["error"]) { this.error = response["error"] }
              else { this.posts = response["posts"]; } 
            } 
          );
        } else {
          this._postService.getAll().subscribe(
            response => {
              if(response["error"]) { this.error = response["error"] }
              else { this.posts = response["posts"]; } 
            } 
          );
        }
    
  }

}
