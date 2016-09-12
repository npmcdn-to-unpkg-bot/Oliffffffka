/* tslint:disable:no-unused-variable */

import { provide } from '@angular/core';
import { Http             } from '@angular/http';
import { addProviders, 
         async, 
         inject, 
         describe, 
         beforeEach, 
         it, 
         expect, 
         beforeEachProviders, 
                          } from '@angular/core/testing'; 
import { LoginService } from './login.service';

describe('Service: Login', () => {
  beforeEachProviders(() => [
    provide(Http, {useValue: Http})
  ]);

  beforeEach(() => {
    addProviders([LoginService]);
  });

  it('should ...', async(inject([LoginService],(service: LoginService) => {
        expect(service).toBeTruthy();
  })));
});
