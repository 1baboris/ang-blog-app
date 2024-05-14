import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { SigleCategoryComponent } from './pages/sigle-category/sigle-category.component';
import { SiglePostComponent } from './pages/sigle-post/sigle-post.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { TermsAndConditionComponent } from './pages/terms-and-condition/terms-and-condition.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'category',
    component: SigleCategoryComponent,
  },
  {
    path: 'post',
    component: SiglePostComponent,
  },

  {
    path: 'about',
    component: AboutUsComponent,
  },
  {
    path: 'term-condition',
    component: TermsAndConditionComponent,
  },
  {
    path: 'contact',
    component: ContactUsComponent,
  },
];
