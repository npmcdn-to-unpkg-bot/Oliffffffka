/* tslint:disable:no-unused-variable */

import { By                     } from '@angular/platform-browser';
import { 
         DebugElement, 
         provide                } from '@angular/core';
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
import { AboutMeComponent       } from './about-me.component';
import { AboutMeService         } from '../services/about-me.service';
import { 
         Http, 
         Response, 
         RequestOptions,
         ConnectionBackend
                                } from '@angular/http';
import { DomSanitizationService } from '@angular/platform-browser';

describe('Component: EditNote', () => {
  beforeEachProviders(() => [
    provide(AboutMeService, {useClass: AboutMeService}),
    provide(Http, {useClass: Http}),
    provide(ConnectionBackend, {useClass: ConnectionBackend}),
    provide(RequestOptions, {useValue: RequestOptions}),
    provide(Response, {useValue: Response}),
    provide(DomSanitizationService, {useClass: DomSanitizationService})
  ]);
  
  beforeEach(() => {
    addProviders([AboutMeComponent]);
  });
  
  it('should create an instance', async(inject([AboutMeComponent], (component: AboutMeComponent) => {
    expect(component).toBeTruthy();
  })));
});

