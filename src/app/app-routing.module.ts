import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { SinglePostComponent } from './pages/single-post/single-post.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';
import { TermsAndConditionsComponent } from './pages/terms-and-conditions/terms-and-conditions.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { SingleCategoryComponent } from './pages/single-category/single-category.component';
import { LoginComponent } from './auth/components/login/login.component';
import { RegisterComponent } from './auth/components/register/register.component';
import { AuthGuard } from './auth/services/auth.guard';
import { LayoutComponent } from './layouts/layout/layout.component';
import { LandingComponent } from './pages/landing/landing.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },

  {
    path: '',
    component: LayoutComponent,
    canActivate: [AuthGuard],
    children: [
      { path: '', component: HomeComponent },
      { path: 'landing', component: LandingComponent },
      { path: 'category', component: SingleCategoryComponent },
      { path: 'post', component: SinglePostComponent },

      { path: 'about', component: AboutUsComponent },
      { path: 'terms-conditions', component: TermsAndConditionsComponent },
      { path: 'contact', component: ContactUsComponent }
    ]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
