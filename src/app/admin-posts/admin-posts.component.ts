import { Component, OnInit } from '@angular/core';
import { PostService } from '../services/post.service';
import { Router } from '@angular/router';

@Component({
  moduleId: module.id,
  selector: 'app-admin-posts',
  templateUrl: 'admin-posts.component.html',
  styleUrls: ['admin-posts.component.css'],
  providers: [PostService]
})
export class AdminPostsComponent implements OnInit {

  posts: Object;
  error: string;

  constructor(
    private _postService: PostService,
    private _router: Router
  ) { }

  ngOnInit() {
    if(!localStorage.getItem("user") || !localStorage.getItem("token")){
      this._router.navigateByUrl('login');
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
