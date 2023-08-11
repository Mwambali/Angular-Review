import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CourseService } from '../course.service';
import { StudentService } from '../../students/student.service';
import { Course } from '../models/course.model';
import { FormControl, FormGroup } from '@angular/forms';
import { Student } from '../../students/models/student.model';
import { AvatarGenerator } from 'random-avatar-generator';

@Component({
  selector: 'app-update-course',
  templateUrl: './update-course.component.html',
  styleUrls: ['./update-course.component.css']
})
export class UpdateCourseComponent implements OnInit {

  generator: AvatarGenerator = new AvatarGenerator();

  @ViewChild('tagsInput') tagsInput!: ElementRef;

  courseDetail: Course | undefined;
  students: Student[] = [];
  updated = false;
  error: any; // Modify this type as per your error handling

  courseForm: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private courseService: CourseService,
    private studentService: StudentService
  ) {
    this.courseForm = new FormGroup({
      courseName: new FormControl(''),
      credits: new FormControl(0),
      students: new FormControl('')
    });
  }

  ngOnInit(): void {
    const courseId = this.route.snapshot.paramMap.get('id');

    if (courseId) {
      this.courseService.getCourseById(courseId).subscribe(course => {
        this.courseDetail = course;
        this.courseForm.patchValue({
          courseName: course.courseName,
          credits: course.credits,
          students: course.students.join(', ')
        });

        this.studentService.getStudents().subscribe(students => {
          this.students = students;
          this.initializeTagify();
        });
      });
    }
  }

  initializeTagify() {
    const studentList = this.students
      .filter(student => this.courseDetail?.students.includes(student.studentName.toLowerCase()))
      .map(student => student.studentName.toUpperCase());

    // Initialize Tagify here using studentList and this.tagsInput.nativeElement
  }

  onSubmit() {
    const courseStudents = this.courseForm.value.students
      .split(',')
      .map((student: string) => student.trim())
      .filter(Boolean);

    const updatedCourse: Course = {
      id: this.courseDetail?.id,
      courseName: this.courseForm.value.courseName,
      credits: this.courseForm.value.credits,
      students: courseStudents
    };

    this.courseService.updateCourse(updatedCourse).subscribe(
      () => {
        this.updated = true;
        setTimeout(() => this.router.navigate(['/courses']), 2000);
      },
      (error) => {
        this.error = error; // Handle error as needed
      }
    );
  }
}
