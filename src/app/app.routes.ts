import { Routes } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { PrivacyComponent } from './views/privacy/privacy.component';
import { ImprintComponent } from './views/imprint/imprint.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'privacy', component: PrivacyComponent },
  { path: 'imprint', component: ImprintComponent },
];
