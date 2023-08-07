import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { StudentService } from '../student.service';
import { Student } from '../models/student.model';
import { AvatarGenerator } from 'random-avatar-generator';

@Component({
  selector: 'app-create-student',
  templateUrl: './create-student.component.html',
  styleUrls: ['./create-student.component.css']
})
export class CreateStudentComponent implements OnInit {
  generator: AvatarGenerator = new AvatarGenerator();


  studentForm: FormGroup;
  courseOptions: string[] = []; // Populate this with your course options
  classOptions: string[] = []; // Populate this with your class options
  error: string = '';

  constructor(
    private fb: FormBuilder,
    private studentService: StudentService,
    private router: Router
  ) {
    this.studentForm = this.fb.group({
      studentName: ['', Validators.required],
      studentAge: [0, Validators.required],
      studentClass: ['', Validators.required],
      studentCourse: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    // Fetch class and course options from your service here
    this.classOptions = ['Class A', 'Class B', 'Class C']; // Example
    this.courseOptions = ['Course 1', 'Course 2', 'Course 3']; // Example
  }

  onSubmit(): void {
    if (this.studentForm.valid) {
      const newStudent: Student = this.studentForm.value;
      this.studentService.createStudent(newStudent).subscribe(
        () => {
          this.router.navigate(['/students']);
        },
        (error) => {
          this.error = error.message;
        }
      );
    }
  }
}
