import { provideRouter, RouterConfig } from '@angular/router';
import { PostComponent } from './post/post.component';
import { CategoryComponent } from './category/category.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { AdminPostsComponent } from './admin-posts/admin-posts.component';
import { AdminAboutComponent } from './admin-about/admin-about.component';
import { AdminCategoryComponent } from './admin-category/admin-category.component';
import { AdminPostAddComponent } from './admin-post-add/admin-post-add.component';
import { AdminCategoryAddComponent } from './admin-category-add/admin-category-add.component';
import { AdminCategoryEditComponent } from './admin-category-edit/admin-category-edit.component';

export const appRoutes: RouterConfig = [
    {
        path: '',
        redirectTo: 'posts',
        pathMatch: 'full'
    },
    {
        path: 'posts',
        component: PostComponent
    },
    {
        path: 'post/:id',
        component: PostComponent
    },
    {
        path: 'category/:cat',
        component: PostComponent
    },
    {
        path: 'about',
        component: AboutMeComponent
    },
    {
        path: 'categories',
        component: CategoryComponent
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'admin',
        children: [
            { 
                path: '', 
                component: AdminComponent, 
            },
            { 
                path: 'posts', 
                children: [
                    {
                        path: '',
                        component: AdminPostsComponent,
                    },
                    {
                        path: 'add',
                        component: AdminPostAddComponent
                    },
                    {
                        path: 'add/:id',
                        component: AdminPostAddComponent
                    }
                ] 
            },
            { 
                path: 'about', 
                component: AdminAboutComponent 
            },
            { 
                path: 'categories', 
                children: [
                    {
                        path: '',
                        component: AdminCategoryComponent,
                    },
                    {
                        path: 'add',
                        component: AdminCategoryAddComponent
                    },
                    {
                        path: 'edit/:id',
                        component: AdminCategoryEditComponent
                    }
                ] 
            }
        ]
    },
    {
        path: '**',
        component: NotFoundComponent
    }
]

export const APP_ROUTER_PROVIDER = [provideRouter(appRoutes)];