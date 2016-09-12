/* tslint:disable:no-unused-variable */

import { By                       } from '@angular/platform-browser';
import { DebugElement, provide    } from '@angular/core';
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
import { AdminAboutComponent      } from './admin-about.component';
import { Router                   } from '@angular/router';
import { AboutMeService           } from '../services/about-me.service';
import { FormBuilder              } from '@angular/forms';
import { DomSanitizationService   } from '@angular/platform-browser';

describe('Component: AdminAbout', () => {
  beforeEachProviders(() => [
    provide(Router, {useClass: Router}),
    provide(AboutMeService, {useClass: AboutMeService}),
    provide(FormBuilder, {useClass:FormBuilder}),
    provide(DomSanitizationService, {useClass:DomSanitizationService})
  ]);
  beforeEach(() => {
    addProviders([AdminAboutComponent]);
  });
  it('should create an instance', async(inject([AdminAboutComponent], (component: AdminAboutComponent) => {
    expect(component).toBeTruthy();
  })));
});
