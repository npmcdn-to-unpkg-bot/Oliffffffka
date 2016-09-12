import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CategoryService } from '../services/category.service';
import {  
          FormGroup, 
          FormControl, 
          Validators, 
          FormBuilder,
          AbstractControl
                              } from '@angular/forms';

@Component({
  moduleId: module.id,
  selector: 'app-admin-category-add',
  templateUrl: 'admin-category-add.component.html',
  styleUrls: ['admin-category-add.component.css'],
  providers: [CategoryService]
})
export class AdminCategoryAddComponent implements OnInit {

  catForm: FormGroup;
  name: AbstractControl;
  loaded: boolean = false;

  constructor(
    private _router: Router,
    private _categoryService: CategoryService,
    private _formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    if(!localStorage.getItem("user") || !localStorage.getItem("token")){
      this._router.navigateByUrl('login');
    } else {
      this.loaded = true;
      this.catForm = this._formBuilder.group({
        "name": [""]
      });
      this.name = this.catForm.controls['name'];
    }
  }

  add(data) {
    let requestData = {
      type: "category",
      name: data.name
    };
    this._categoryService.add(requestData).subscribe(
      response => {
        if(response["success"]){
          this._router.navigateByUrl('admin/categories');
        }
      }
    );
  }

}
