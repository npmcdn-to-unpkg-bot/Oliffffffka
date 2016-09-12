/* tslint:disable:no-unused-variable */

import { provide          } from '@angular/core';
import { Http             } from '@angular/http';
import { addProviders, 
         async, 
         inject, 
         describe, 
         beforeEach, 
         it, 
         expect, 
         beforeEachProviders 
                          } from '@angular/core/testing';
import { CategoryService  } from './category.service';

describe('Service: Note', () => {
  
  beforeEachProviders(() => [
    provide(Http, {useValue: Http})
  ]);
  
  beforeEach(() => {
    addProviders([CategoryService])
  });
  
  it('service should be running... ', async(inject([CategoryService], (service: CategoryService) => {
    expect(service).toBeTruthy();
  })));
  
});
