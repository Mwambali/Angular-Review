import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { StudentService } from '../../students/student.service';
import { CourseService } from '../../courses/course.service';
import { Course } from '../models/course.model';
import { Student } from '../../students/models/student.model';
import { AvatarGenerator } from 'random-avatar-generator';
import { NgSelectComponent } from '@ng-select/ng-select';

@Component({
  selector: 'app-create-course',
  templateUrl: './create-course.component.html',
  styleUrls: ['./create-course.component.css']
})
export class CreateCourseComponent implements OnInit {
  generator: AvatarGenerator = new AvatarGenerator();

  courseForm: FormGroup;
  selectedStudents: Student[] = [];
  options: any[] = [];
  error: string = '';

  @ViewChild('selectRef', { static: false }) selectRef!: NgSelectComponent;

  constructor(
    private fb: FormBuilder,
    private studentService: StudentService,
    private courseService: CourseService,
    private router: Router
  ) {
    this.courseForm = this.fb.group({
      courseName: ['', Validators.required],
      courseCredits: [0, Validators.required],
      selectedStudents: [[]],
    });
  }

  ngOnInit(): void {
    this.fetchStudents();
  }


  fetchStudents(): void {
    this.studentService.getStudents().subscribe({
      next: (students: Student[]) => {
        this.options = students.map((student) => ({
          value: student.id,
          label: student.studentName,
        }));
      },
      error: (error) => {
        this.error = error.message;
      },
    });
  }


  onSubmit(): void {
    if (this.courseForm.valid) {
      const newCourse: Course = {
        courseName: this.courseForm.value.courseName,
        credits: this.courseForm.value.courseCredits,
        students: []
        // students: this.selectedStudents.filter(student => student.id !== undefined)
        //   .map(student => student.id)
      };

      this.courseService.createCourse(newCourse).subscribe({
        next: () => {
          this.router.navigate(['/courses']);
        },
        error: (error) => {
          this.error = error.message;
        },
      });
    }
  }



  handleSelectStudent(selectedOption: any): void {
    this.selectedStudents = [
      ...this.selectedStudents,
      this.options.find((option) => option.value === selectedOption.value)
    ];
    this.selectRef.clearModel();
  }

  handleRemoveStudent(selectedStudent: Student): void {
    this.selectedStudents = this.selectedStudents.filter(
      (student) => student.id !== selectedStudent.id
    );
  }
}
