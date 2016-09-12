/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement, provide } from '@angular/core';
import { addProviders, async, inject, describe, beforeEach, beforeEachProviders, it, expect } from '@angular/core/testing';
import { AdminPostAddComponent } from './admin-post-add.component';
import { Router } from '@angular/router';
import { PostService } from '../services/post.service';

describe('Component: AdminAbout', () => {
  beforeEachProviders(() => [
    provide(Router, {useClass: Router}),
    provide(PostService, {useClass: PostService})
  ]);
  beforeEach(() => {
    addProviders([AdminPostAddComponent]);
  });
  it('should create an instance', async(inject([AdminPostAddComponent], (component: AdminPostAddComponent) => {
    expect(component).toBeTruthy();
  })));
});
