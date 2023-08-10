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
      this.classService.createClass(className).subscribe({
        next: () => {
          this.classForm.reset();
          this.fetchCreatedClasses();
        },
        // Handle error if needed
      });
    }
  }

  fetchCreatedClasses(): void {
    this.classService.getClasses().subscribe({
      next: (classes) => {
        this.createdClasses = classes
      },
      // Handle error if needed
    });
  }

  editClass(classInfo: Class): void {
    this.router.navigate(['/view-class/', classInfo.id]);
  }

  deleteClass(classId: string): void {
    this.classService.deleteClass(classId).subscribe({
      next: () => {
        this.fetchCreatedClasses();
      },
      // Handle error if needed
    });
  }
}
