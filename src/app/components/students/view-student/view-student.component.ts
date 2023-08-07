import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Student } from '../models/student.model';
import { StudentService } from '../student.service';
import { AvatarGenerator } from 'random-avatar-generator';

@Component({
  selector: 'app-view-student',
  templateUrl: './view-student.component.html',
  styleUrls: ['./view-student.component.css'],
})
export class ViewStudentComponent implements OnInit {
  generator: AvatarGenerator = new AvatarGenerator();


  studentDetail: Student | undefined;
  totalCourse = 0;

  constructor(
    private route: ActivatedRoute,
    private studentService: StudentService
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      const studentId = params['id'];
      this.studentService.getStudentById(studentId).subscribe((student) => {
        this.studentDetail = student;
        this.totalCourse = student.studentCourse.length;
      });
    });
  }

  onDelete(id: string | undefined): void {
    if (id) {
      this.studentService.deleteStudent(id).subscribe(() => {
        // Handle successful deletion (e.g., navigate to student list)
      });
    }
  }
}
