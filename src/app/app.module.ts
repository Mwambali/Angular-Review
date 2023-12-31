import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';


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
import { CreateStudentComponent } from './components/students/create-student/create-student.component';
import { NgSelectModule } from '@ng-select/ng-select';
import { CoursesComponent } from './components/courses/courses/courses.component';
import { StudentsComponent } from './components/students/students/students.component';
import { UpdateStudentComponent } from './components/students/update-student/update-student.component';
import { UpdateCourseComponent } from './components/courses/update-course/update-course.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UserDropdownComponent } from './layouts/user-dropdown/user-dropdown.component';
import { JwtModule } from '@auth0/angular-jwt';

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
    AllocateStudentsComponent,
    CreateStudentComponent,
    CoursesComponent,
    StudentsComponent,
    UpdateStudentComponent,
    UpdateCourseComponent,
    UserDropdownComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgSelectModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: () => {
          return localStorage.getItem('auth_token');
        }
      }
    })
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
