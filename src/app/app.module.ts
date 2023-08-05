import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './layouts/navbar/navbar.component';
import { HeaderComponent } from './layouts/header/header.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { SinglePostComponent } from './pages/single-post/single-post.component';
import { TermsAndConditionsComponent } from './pages/terms-and-conditions/terms-and-conditions.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';
import { SubscriptionFormComponent } from './subscription-form/subscription-form.component';
import { CommentFormComponent } from './comments/comment-form/comment-form.component';
import { CommentListComponent } from './comments/comment-list/comment-list.component';
import { SingleCategoryComponent } from './pages/single-category/single-category.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { PostCardComponent } from './layouts/post-card/post-card.component';
import { LoginComponent } from './auth/components/login/login.component';
import { RegisterComponent } from './auth/components/register/register.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { TokenInterceptor } from './auth/auth.interceptor';
import { LayoutComponent } from './layouts/layout/layout.component';
import { LandingComponent } from './pages/landing/landing.component';
import { ViewClassComponent } from './components/classes/view-class/view-class.component';
import { ViewStudentComponent } from './components/students/view-student/view-student.component';
import { ViewCourseComponent } from './components/courses/view-course/view-course.component';
import { CreateCourseComponent } from './components/courses/create-course/create-course.component';
import { CreateClassComponent } from './components/classes/create-class/create-class.component';
import { AllocateStudentsComponent } from './components/students/allocate-students/allocate-students.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    SinglePostComponent,
    TermsAndConditionsComponent,
    ContactUsComponent,
    SubscriptionFormComponent,
    CommentFormComponent,
    CommentListComponent,
    SingleCategoryComponent,
    AboutUsComponent,
    PostCardComponent,
    LoginComponent,
    RegisterComponent,
    LayoutComponent,
    LandingComponent,
    ViewClassComponent,
    ViewStudentComponent,
    ViewCourseComponent,
    CreateCourseComponent,
    CreateClassComponent,
    AllocateStudentsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
