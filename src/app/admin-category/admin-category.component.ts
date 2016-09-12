import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CategoryService } from '../services/category.service';

@Component({
  moduleId: module.id,
  selector: 'app-admin-category',
  templateUrl: 'admin-category.component.html',
  styleUrls: ['admin-category.component.css'],
  providers: [CategoryService]
})
export class AdminCategoryComponent implements OnInit {

  cats: Object;
  error: string;

  constructor(
    private _categoryService: CategoryService,
    private _router: Router
  ) { }

  ngOnInit() {
    if(!localStorage.getItem("user") || !localStorage.getItem("token")){
      this._router.navigateByUrl('login');
    } else {
      this._categoryService.getCategories().subscribe(
        response => {
          if(response["error"]) { this.error = response["error"]; }
          else {
            this.cats = response["cats"];
          }
        }
      );
    }
  }

  delete(id){
    this._categoryService.delete(id).subscribe(
      () => {
        this._categoryService.getCategories().subscribe(
          response => {
            if(response["error"]) { this.error = response["error"]; }
            else {
              this.cats = response["cats"];
            }
          }
        ); 
      }
    );
  }

}
