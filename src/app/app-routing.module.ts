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
import { ViewClassComponent } from './components/classes/view-class/view-class.component';
import { ViewCourseComponent } from './components/courses/view-course/view-course.component';
import { ViewStudentComponent } from './components/students/view-student/view-student.component';
import { CreateStudentComponent } from './components/students/create-student/create-student.component';
import { CreateCourseComponent } from './components/courses/create-course/create-course.component';
import { CoursesComponent } from './components/courses/courses/courses.component';
import { StudentsComponent } from './components/students/students/students.component';
import { CreateClassComponent } from './components/classes/create-class/create-class.component';
import { UpdateStudentComponent } from './components/students/update-student/update-student.component';
import { UpdateCourseComponent } from './components/courses/update-course/update-course.component';

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
      { path: 'courses', component: CoursesComponent },
      { path: 'students', component: StudentsComponent },

      { path: 'view-class/:id', component: ViewClassComponent },
      { path: 'view-course/:id', component: ViewCourseComponent },
      { path: 'view-student/:id', component: ViewStudentComponent },
      { path: 'update-student/:id', component: UpdateStudentComponent },
      { path: 'update-course/:id', component: UpdateCourseComponent },

      { path: 'create-student', component: CreateStudentComponent },
      { path: 'create-course', component: CreateCourseComponent },
      { path: 'create-class', component: CreateClassComponent },


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
