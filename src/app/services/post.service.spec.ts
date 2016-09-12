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
import { PostService      } from './post.service';

describe('Service: Note', () => {
  
  beforeEachProviders(() => [
    provide(Http, {useValue: Http})
  ]);
  
  beforeEach(() => {
    addProviders([PostService])
  });
  
  it('service should be running... ', async(inject([PostService], (service: PostService) => {
    expect(service).toBeTruthy();
  })));
  
});
