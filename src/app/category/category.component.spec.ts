/* tslint:disable:no-unused-variable */

import { By                 } from '@angular/platform-browser';
import { 
         DebugElement, 
         provide            } from '@angular/core';
import { 
         describe, 
         it,
         expect, 
         addProviders, 
         async, 
         inject,
         beforeEach,
         beforeEachProviders 
                            } from '@angular/core/testing';
import { ActivatedRoute     } from '@angular/router';
import { CategoryService    } from '../services/category.service';
import { CategoryComponent  } from './category.component';
import { 
         Http, 
         Response, 
         RequestOptions,
         ConnectionBackend
                            } from '@angular/http';

describe('Component: EditNote', () => {
  beforeEachProviders(() => [
    provide(CategoryService, {useClass: CategoryService}),
    provide(Http, {useClass: Http}),
    provide(ConnectionBackend, {useClass: ConnectionBackend}),
    provide(RequestOptions, {useValue: RequestOptions}),
    provide(Response, {useValue: Response}),
    provide(ActivatedRoute, {useValue: ActivatedRoute}),
  ]);
  
  beforeEach(() => {
    addProviders([CategoryComponent]);
  });
  
  it('should create an instance', async(inject([CategoryComponent], (component: CategoryComponent) => {
    expect(component).toBeTruthy();
  })));
});