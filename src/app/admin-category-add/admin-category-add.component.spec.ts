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
import { AdminCategoryAddComponent  } from './admin-category-add.component';
import { Router                     } from '@angular/router';
import { CategoryService            } from '../services/category.service';
import { FormBuilder                } from '@angular/forms';

describe('Component: AdminAbout', () => {
  beforeEachProviders(() => [
    provide(Router, {useClass: Router}),
    provide(CategoryService, {useClass: CategoryService}),
    provide(FormBuilder, {useClass:FormBuilder})
  ]);
  beforeEach(() => {
    addProviders([AdminCategoryAddComponent]);
  });
  it('should create an instance', async(inject([AdminCategoryAddComponent], (component: AdminCategoryAddComponent) => {
    expect(component).toBeTruthy();
  })));
});
