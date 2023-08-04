import { Component, OnInit } from '@angular/core';
import { AvatarGenerator } from 'random-avatar-generator';
// import { ActivatedRoute, Router } from '@angular/router';
// import { ClassService } from '../../services/class.service';
// import { StudentService } from '../../services/student.service';
// import { Observable } from 'rxjs';
// import { map, switchMap } from 'rxjs/operators';
// import { Class } from '../../models/class.model';
// import { Student } from '../../models/student.model';

@Component({
  selector: 'app-view-class',
  templateUrl: './view-class.component.html',
  styleUrls: ['./view-class.component.scss']
})
export class ViewClassComponent implements OnInit {
  generator: AvatarGenerator = new AvatarGenerator();
  classDetail: any// Class | undefined;
  numOfStudents: any //Student[] = [];

  // constructor(
  //   private route: ActivatedRoute,
  //   private router: Router,
  //   private classService: ClassService,
  //   private studentService: StudentService
  // ) { }

  ngOnInit(): void {
    // this.route.params.pipe(
    //   map(params => params['id']),
    //   switchMap(id => this.classService.getClassById(id))
    // ).subscribe(classDetail => {
    //   this.classDetail = classDetail;
    //   this.numOfStudents = this.studentService.getStudentsByClass(classDetail.className);
    // });
  }

  onDelete(id: string | undefined): void {
    // if (id) {
    //   this.classService.deleteClass(id).subscribe(() => {
    //     this.router.navigate(['/classes']);
    //   });
    // }
  }
}
