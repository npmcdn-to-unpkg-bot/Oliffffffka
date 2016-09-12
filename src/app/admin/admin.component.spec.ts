/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement, provide } from '@angular/core';
import { addProviders, async, inject, describe, beforeEach, it, expect, beforeEachProviders } from '@angular/core/testing';
import { AdminComponent } from './admin.component';
import { Router } from '@angular/router';
import { LoginService } from '../services/login.service';

describe('Component: Admin', () => {
  beforeEachProviders(() => [
    provide(Router, {useClass: Router}),
    provide(LoginService, {useClass: LoginService})
  ]);
  beforeEach(() => {
    addProviders([AdminComponent]);
  });
  it('should create an instance', async(inject([AdminComponent], (component: AdminComponent) => {
    expect(component).toBeTruthy();
  })));
});
