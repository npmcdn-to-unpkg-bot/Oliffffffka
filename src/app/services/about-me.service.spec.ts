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
import { AboutMeService      } from './about-me.service';

describe('Service: Note', () => {
  
  beforeEachProviders(() => [
    provide(Http, {useValue: Http})
  ]);
  
  beforeEach(() => {
    addProviders([AboutMeService])
  });
  
  it('service should be running... ', async(inject([AboutMeService], (service: AboutMeService) => {
    expect(service).toBeTruthy();
  })));
  
});