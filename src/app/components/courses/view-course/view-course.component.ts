import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CourseService } from '../course.service';
// import { StudentService } from '../services/student.service';
import { Course } from '../models/course.model';
import { AvatarGenerator } from 'random-avatar-generator';

@Component({
  selector: 'app-view-course',
  templateUrl: './view-course.component.html',
  styleUrls: ['./view-course.component.css']
})
export class ViewCourseComponent implements OnInit {

  generator: AvatarGenerator = new AvatarGenerator();

  courseId: string | null = null;
  courseDetail: Course | undefined;
  courseStudents: string[] = [];
  deleted = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private courseService: CourseService,
    // private studentService: StudentService
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.courseId = params.get('id');
      this.getCourseDetail();
    });
  }

  getCourseDetail(): void {
    if (this.courseId) {
      this.courseService.getCourseById(this.courseId).subscribe(course => {
        this.courseDetail = course;
        this.getStudentsByCourse(course.courseName);
      });
    }
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
