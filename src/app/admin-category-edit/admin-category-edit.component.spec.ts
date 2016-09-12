/* tslint:disable:no-unused-variable */

import { By                         } from '@angular/platform-browser';
import { DebugElement, provide      } from '@angular/core';
import { 
         addProviders, 
         async, 
         inject, 
         describe, 
         beforeEach, 
         beforeEachProviders, 
         it, 
         expect 
                                    } from '@angular/core/testing';
import { AdminCategoryEditComponent } from './admin-category-edit.component';
import { Router, ActivatedRoute     } from '@angular/router';
import { CategoryService            } from '../services/category.service';
import { FormBuilder                } from '@angular/forms';  

describe('Component: AdminAbout', () => {
  beforeEachProviders(() => [
    provide(Router, {useClass: Router}),
    provide(CategoryService, {useClass: CategoryService}),
    provide(FormBuilder, {useClass: FormBuilder}),
    provide(ActivatedRoute, {useValue:ActivatedRoute})
  ]);
  beforeEach(() => {
    addProviders([AdminCategoryEditComponent]);
  });
  it('should create an instance', async(inject([AdminCategoryEditComponent], (component: AdminCategoryEditComponent) => {
    expect(component).toBeTruthy();
  })));
});