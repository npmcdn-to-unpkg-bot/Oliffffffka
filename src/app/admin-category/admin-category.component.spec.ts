/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement, provide } from '@angular/core';
import { addProviders, async, inject, describe, beforeEach, beforeEachProviders, it, expect } from '@angular/core/testing';
import { AdminCategoryComponent } from './admin-category.component';
import { Router } from '@angular/router';
import { CategoryService } from '../services/category.service';

describe('Component: AdminAbout', () => {
  beforeEachProviders(() => [
    provide(Router, {useClass: Router}),
    provide(CategoryService, {useClass: CategoryService})
  ]);
  beforeEach(() => {
    addProviders([AdminCategoryComponent]);
  });
  it('should create an instance', async(inject([AdminCategoryComponent], (component: AdminCategoryComponent) => {
    expect(component).toBeTruthy();
  })));
});
