import './rxjs-operators';
import { Component                  } from '@angular/core';
import { NotFoundComponent          } from './not-found/not-found.component';
import { PostComponent              } from './post/post.component';
import { CategoryComponent          } from './category/category.component';
import { AboutMeComponent           } from './about-me/about-me.component';
import { LoginComponent             } from './login/login.component';
import { AdminComponent             } from './admin/admin.component';
import { AdminPostsComponent        } from './admin-posts/admin-posts.component';
import { AdminPostAddComponent      } from './admin-post-add/admin-post-add.component';
import { AdminAboutComponent        } from './admin-about/admin-about.component';
import { AdminCategoryComponent     } from './admin-category/admin-category.component';
import { AdminCategoryAddComponent  } from './admin-category-add/admin-category-add.component';
import { AdminCategoryEditComponent } from './admin-category-edit/admin-category-edit.component';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  directives: [
    NotFoundComponent,
    PostComponent, 
    CategoryComponent, 
    AboutMeComponent, 
    LoginComponent, 
    AdminComponent, 
    AdminPostsComponent, 
    AdminPostAddComponent,  
    AdminAboutComponent, 
    AdminCategoryComponent,
    AdminCategoryAddComponent,
    AdminCategoryEditComponent
  ]
})
export class AppComponent {
}
