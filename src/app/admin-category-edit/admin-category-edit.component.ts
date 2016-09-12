import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CategoryService } from '../services/category.service';
import {  
          FormGroup, 
          FormControl, 
          Validators, 
          FormBuilder,
          AbstractControl
                              } from '@angular/forms';
import { ICategory } from '../interfaces/cat-data.interface';

@Component({
  moduleId: module.id,
  selector: 'app-admin-category-edit',
  templateUrl: 'admin-category-edit.component.html',
  styleUrls: ['admin-category-edit.component.css'],
  providers: [CategoryService]
})
export class AdminCategoryEditComponent implements OnInit {

  private _id;

  cat: ICategory;
  name: AbstractControl;
  catForm: FormGroup;  

  error: string;

  constructor(
    private _router: Router,
    private _activatedRoute: ActivatedRoute,
    private _categoryService: CategoryService,
    private _formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    if(!localStorage.getItem("user") || !localStorage.getItem("token")){
      this._router.navigateByUrl('login');
    } else {
      this._activatedRoute.params.subscribe(
        params => {
          this._id = params['id'];
          this._categoryService.getCategory(this._id).subscribe(
            response => {
              if(response["error"]) { this.error = response["error"]; }
              else {
                this.cat = response["cats"][0];
                this.catForm = this._formBuilder.group({
                  "name": [this.cat.name]
                });
                this.name = this.catForm.controls['name'];
              }
            }
          );
        }
      );
    }
  }

  edit(data) {
    let requestData = {
      type: "category",
      id: this._id,
      name: data.name
    };
    this._categoryService.edit(requestData).subscribe(
      response => {
        if(response["success"]){
          this._router.navigateByUrl('admin/categories');
        }
      }
    );
  }

}
