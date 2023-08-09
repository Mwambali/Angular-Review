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
  selectedCourses: string[] = []; // Initialize an empty array to store selected courses


  constructor(
    private fb: FormBuilder,
    private studentService: StudentService,
    private router: Router
  ) {
    this.studentForm = this.fb.group({
      studentName: ['', Validators.required],
      studentAge: [0, Validators.required],
      studentClass: ['', Validators.required],
      studentCourse: [[]], // Initialize as an empty array to store selected courses
    });
  }

  ngOnInit(): void {
    // Fetch class and course options from your service here
    this.classOptions = ['Class A', 'Class B', 'Class C']; // Example
    this.courseOptions = ['Course 1', 'Course 2', 'Course 3']; // Example
  }

  onCourseChange(event: any) {
    // Get the selected options from the event
    const selectedOptions = event.target.selectedOptions;
    // Map the selected options to an array of strings
    this.selectedCourses = Array.from(selectedOptions, (option: HTMLOptionElement) => option.value);
  }

  onSubmit(): void {
    if (this.studentForm.valid) {
      const newStudent: Student = this.studentForm.value;
      // Assign the selected courses array to the studentCourse property
      newStudent.studentCourse = this.selectedCourses;
      this.studentService.createStudent(newStudent).subscribe({
        next: () => {
          this.router.navigate(['/students']);
        },
        error: (error) => {
          this.error = error.message;
        },
      });
    }
  }
}
