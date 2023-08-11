import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { StudentService } from '../student.service';
import { Student } from '../models/student.model';
import { AvatarGenerator } from 'random-avatar-generator';

@Component({
  selector: 'app-update-student',
  templateUrl: './update-student.component.html',
  styleUrls: ['./update-student.component.css']
})
export class UpdateStudentComponent implements OnInit {
  studentForm: FormGroup;
  studentDetail: Student | undefined;
  avatar: string;
  classOptions: string[];

  constructor(
    private fb: FormBuilder,
    private studentService: StudentService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.studentForm = this.fb.group({
      studentName: ['', Validators.required],
      studentAge: ['', Validators.required],
      studentClass: ['', Validators.required],
      studentCourse: [[]]
    });
    this.avatar = new AvatarGenerator().generateRandomAvatar();
    this.classOptions = [];
  }

  ngOnInit(): void {
    this.fetchStudentDetail();
  }

  fetchStudentDetail(): void {
    const studentId = this.route.snapshot.paramMap.get('id');
    if (studentId) {
      this.studentService.getStudentById(studentId).subscribe(
        (studentDetail) => {
          this.studentDetail = studentDetail;
          this.studentForm.patchValue({
            studentName: studentDetail.studentName,
            studentAge: studentDetail.studentAge,
            studentClass: studentDetail.studentClass,
            studentCourse: studentDetail.studentCourse.join(', ')
          });

          this.classOptions = studentDetail.studentCourse.map((course) => course.toUpperCase());
        },
        (error) => {
          console.error('Error fetching student detail:', error);
        }
      );
    }
  }

  onSubmit(): void {
    if (this.studentForm.valid && this.studentDetail) {
      const updatedStudent: Student = {
        id: this.studentDetail.id,
        studentName: this.studentForm.value.studentName,
        studentAge: this.studentForm.value.studentAge,
        studentClass: this.studentForm.value.studentClass,
        studentCourse: this.studentForm.value.studentCourse.split(',').map((course: string) => course.trim()),
        slug: this.studentDetail.slug
      };

      this.studentService.updateStudent(this.studentDetail.id, updatedStudent).subscribe(
        () => {
          this.router.navigate([`/view-student/${this.studentDetail?.id}`]);
        },
        (error) => {
          console.error('Error updating student:', error);
        }
      );
    }
  }
}
