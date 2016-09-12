import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PostService } from '../services/post.service';

@Component({
  moduleId: module.id,
  selector: 'app-admin-post-add',
  templateUrl: 'admin-post-add.component.html',
  styleUrls: ['admin-post-add.component.css'],
  providers: [PostService]
})
export class AdminPostAddComponent implements OnInit {

  constructor(
    private _router: Router,
    private _postService: PostService
  ) { }

  ngOnInit() {
    if(!localStorage.getItem("user") || !localStorage.getItem("token")){
      this._router.navigateByUrl('login');
    }
  }

}
