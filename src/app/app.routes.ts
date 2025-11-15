import {Routes} from '@angular/router';
import {HomeComponent} from './views/home/home.component';
import {ProjectsComponent} from './views/projects/projects.component';
import {BlogComponent} from './views/blog/blog.component';

export const routes: Routes = [{path: '', component: HomeComponent},

	{path: 'project', component: ProjectsComponent},

	{path: 'blog', component: BlogComponent}

];
