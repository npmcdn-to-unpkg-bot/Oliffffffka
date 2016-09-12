/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement, provide } from '@angular/core';
import { addProviders, async, inject, describe, beforeEach, it, expect, beforeEachProviders } from '@angular/core/testing';
import { AdminPostsComponent } from './admin-posts.component';
import { Router } from '@angular/router';
import { PostService } from '../services/post.service';

describe('Component: AdminPosts', () => {
  beforeEachProviders(() => [
    provide(Router, {useClass: Router}),
    provide(PostService, {useClass: PostService})
  ]);
  beforeEach(() => {
    addProviders([AdminPostsComponent]);
  });
  it('should create an instance', async(inject([AdminPostsComponent], (component: AdminPostsComponent) => {
    expect(component).toBeTruthy();
  })));
});
