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
import { PostService        } from '../services/post.service';
import { PostComponent      } from './post.component';
import { 
         Http, 
         Response, 
         RequestOptions,
         ConnectionBackend
                            } from '@angular/http';

describe('Component: EditNote', () => {
  beforeEachProviders(() => [
    provide(PostService, {useClass: PostService}),
    provide(Http, {useClass: Http}),
    provide(ConnectionBackend, {useClass: ConnectionBackend}),
    provide(RequestOptions, {useValue: RequestOptions}),
    provide(Response, {useValue: Response}),
    provide(ActivatedRoute, {useValue: ActivatedRoute}),
  ]);
  
  beforeEach(() => {
    addProviders([PostComponent]);
  });
  
  it('should create an instance', async(inject([PostComponent], (component: PostComponent) => {
    expect(component).toBeTruthy();
  })));
});
