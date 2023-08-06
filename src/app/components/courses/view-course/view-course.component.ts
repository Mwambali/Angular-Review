import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
// import { CourseService } from '../services/course.service';
// import { StudentService } from '../services/student.service';
// import { Course } from '../models/course.model';

@Component({
  selector: 'app-view-course',
  templateUrl: './view-course.component.html',
  styleUrls: ['./view-course.component.css']
})
export class ViewCourseComponent implements OnInit {
  courseId: any //string | null = null;
  courseDetail: any //Course | undefined;
  courseStudents: any //string[] = [];
  deleted = false;

  constructor(
    // private route: ActivatedRoute,
    // private router: Router,
    // private courseService: CourseService,
    // private studentService: StudentService
  ) { }

  ngOnInit(): void {
    // this.route.paramMap.subscribe(params => {
    //   this.courseId = params.get('id');
    //   this.getCourseDetail();
    // });
  }

  getCourseDetail(): void {
    // if (this.courseId) {
    //   this.courseService.getCourseById(this.courseId).subscribe(course => {
    //     this.courseDetail = course;
    //     this.getStudentsByCourse(course.courseName);
    //   });
    // }
  }

  getStudentsByCourse(courseName: string): void {
    // this.studentService.getStudentsByCourse(courseName).subscribe(students => {
    //   this.courseStudents = students.map(student => student.studentName.toUpperCase());
    // });
  }

  onDelete(): void {
    //   if (this.courseDetail) {
    //     this.courseService.deleteCourse(this.courseDetail.id).subscribe(() => {
    //       this.deleted = true;
    //       this.router.navigate(['/courses']);
    //     });
    //   }
  }
}
