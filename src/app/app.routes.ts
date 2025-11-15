import { Routes } from '@angular/router';
import {AppComponent} from './app.component';
import { HomeComponent } from './views/home/home.component';
import { ProjectsComponent } from './views/projects/projects.component';
import { BlogPostComponent } from './views/blog-post/blog-post.component';
import { BlogComponent } from './views/blog/blog.component';

export const routes: Routes = [
  {path: '', component: HomeComponent},

  {path: 'project', component: ProjectsComponent},
  {path: 'project/:project', component: ProjectsComponent},

  {path: 'blog', component: BlogComponent},
  {path: 'blog/:blog', component: BlogPostComponent},

];
