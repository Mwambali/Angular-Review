import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ClassService } from '../class.service';
import { Class } from '../models/class.model';

@Component({
  selector: 'app-create-class',
  templateUrl: './create-class.component.html',
  styleUrls: ['./create-class.component.css']
})
export class CreateClassComponent implements OnInit {
  classForm: FormGroup;
  createdClasses: Class[] = [];
  selectedClass: Class | null = null;
  error: string = '';



  constructor(
    private fb: FormBuilder,
    private classService: ClassService,
    private router: Router
  ) {
    this.classForm = this.fb.group({
      className: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.fetchCreatedClasses();
  }

  onSubmit(): void {
    if (this.classForm.valid) {
      const className = this.classForm.value.className;

      if (this.selectedClass) {
        this.classService.updateClass(this.selectedClass.id, className).subscribe({
          next: () => {
            this.selectedClass = null;
            this.classForm.reset();
            this.fetchCreatedClasses();
          },
          error: (error) => {
            this.error = error.message;
          },
        });
      } else {
        this.classService.createClass(className).subscribe({
          next: () => {
            this.classForm.reset();
            this.fetchCreatedClasses();
          },
          error: (error) => {
            this.error = error.message;
          },
        });
      }
    }
  }


  fetchCreatedClasses(): void {
    this.classService.getClasses().subscribe({
      next: (classes) => {
        this.createdClasses = classes
      },
      error: (error) => {
        this.error = error.message;
      },
    });
  }

  editClass(classInfo: Class): void {
    this.selectedClass = classInfo;
    window.scrollTo({ top: 0, behavior: 'smooth' });

  }

  // updateClass(): void {
  //   if (this.selectedClass) {
  //     const newClassName = this.selectedClass.className;
  //     this.classService.updateClass(this.selectedClass.id, newClassName).subscribe({
  //       next: () => {
  //         this.selectedClass = null;
  //         this.fetchCreatedClasses();
  //       },
  //       // Handle error if needed
  //     });
  //   }
  // }

  deleteClass(classId: string): void {
    this.classService.deleteClass(classId).subscribe({
      next: () => {
        this.fetchCreatedClasses();
      },
      error: (error) => {
        this.error = error.message;
      },
    });
  }
}
