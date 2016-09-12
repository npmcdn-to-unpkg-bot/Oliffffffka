import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../services/category.service';

@Component({
  moduleId: module.id,
  selector: 'categories',
  templateUrl: 'category.component.html',
  styleUrls: ['category.component.css'],
  providers: [CategoryService]
})
export class CategoryComponent implements OnInit {
  
  cats: Object;
  error: string;

  constructor(
    private _categoryService: CategoryService
  ) { }

  ngOnInit() {
    this._categoryService.getCategories().subscribe(
      response => {
        if(response["error"]){ this.error = response["error"]; }
        else { this.cats = response["cats"]; }
      }
    );
  }

}