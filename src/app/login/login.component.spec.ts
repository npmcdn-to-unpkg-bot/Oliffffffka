/* tslint:disable:no-unused-variable */

import { By                 } from '@angular/platform-browser';
import { 
         DebugElement, 
         provide,
         ElementRef    
                        } from '@angular/core';
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
import { Router     } from '@angular/router';
import { LoginService        } from '../services/login.service';
import { LoginComponent } from './login.component';
import { 
         Http, 
         Response, 
         RequestOptions,
         ConnectionBackend
                            } from '@angular/http';
import { FormBuilder } from '@angular/forms';

describe('Component: EditNote', () => {
  beforeEachProviders(() => [
    provide(LoginService, {useClass: LoginService}),
    provide(Http, {useClass: Http}),
    provide(ConnectionBackend, {useClass: ConnectionBackend}),
    provide(RequestOptions, {useValue: RequestOptions}),
    provide(Response, {useValue: Response}),
    provide(Router, {useClass: Router}),
    provide(FormBuilder, {useClass:FormBuilder})
  ]);
  
  beforeEach(() => {
    addProviders([LoginComponent]);
  });
  
  it('should create an instance', async(inject([LoginComponent], (component: LoginComponent) => {
    expect(component).toBeTruthy();
  })));
});