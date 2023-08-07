import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Class } from '../models/class.model';
import { ClassService } from '../class.service';
import { Course } from '../../courses/models/course.model';
import { AvatarGenerator } from 'random-avatar-generator';

@Component({
  selector: 'app-view-class',
  templateUrl: './view-class.component.html',
  styleUrls: ['./view-class.component.scss'],
})
export class ViewClassComponent implements OnInit {
  generator: AvatarGenerator = new AvatarGenerator();

  classDetail: Class | undefined;
  classCourses: Course[] = []; // List of courses associated with the class

  constructor(
    private route: ActivatedRoute,
    private classService: ClassService
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      const classId = params['id'];
      this.classService.getClassById(classId).subscribe((classData) => {
        console.log(classData);

        this.classDetail = classData;
        // Fetch the list of courses associated with the class
        // this.classService.getCoursesByClass(classId).subscribe((courses) => {
        //   this.classCourses = courses;
        // });
      });
    });
  }
  onDelete(id: string | undefined): void {
    if (id) {
      this.classService.deleteClass(id).subscribe(() => {
        // Handle successful deletion (e.g., navigate to class list)
      });
    }
  }
}




// import { Component, OnInit } from '@angular/core';
// import { ActivatedRoute } from '@angular/router';
// import { Class } from '../models/class.model';
// import { ClassService } from '../class.service';
// import { AvatarGenerator } from 'random-avatar-generator';

// @Component({
//   selector: 'app-view-class',
//   templateUrl: './view-class.component.html',
//   styleUrls: ['./view-class.component.scss'],
// })
// export class ViewClassComponent implements OnInit {
//   generator: AvatarGenerator = new AvatarGenerator();


//   classDetail: Class | undefined;
//   numOfStudents: number = 0;

//   constructor(
//     private route: ActivatedRoute,
//     private classService: ClassService
//   ) { }

//   ngOnInit(): void {
//     this.route.params.subscribe((params) => {
//       const classId = params['id'];
//       this.classService.getClassById(classId).subscribe((classData) => {
//         this.classDetail = classData;
//         // You need to fetch and set the number of students from your backend API
//         this.numOfStudents =
//       });
//     });
//   }

//   onDelete(id: string | undefined): void {
//     if (id) {
//       this.classService.deleteClass(id).subscribe(() => {
//         // Handle successful deletion (e.g., navigate to class list)
//       });
//     }
//   }
// }




// // import { Component, OnInit } from '@angular/core';
// // import { AvatarGenerator } from 'random-avatar-generator';
// // import { ActivatedRoute, Router } from '@angular/router';
// // import { ClassService } from '../../services/class.service';
// // import { StudentService } from '../../services/student.service';
// // import { Observable } from 'rxjs';
// // import { map, switchMap } from 'rxjs/operators';
// // import { Class } from '../../models/class.model';
// // import { Student } from '../../models/student.model';

// // @Component({
// //   selector: 'app-view-class',
// //   templateUrl: './view-class.component.html',
// //   styleUrls: ['./view-class.component.scss']
// // })
// // export class ViewClassComponent implements OnInit {
// //   generator: AvatarGenerator = new AvatarGenerator();
// //   classDetail: any// Class | undefined;
// //   numOfStudents: any //Student[] = [];

// //   constructor(
// //     private route: ActivatedRoute,
// //     private router: Router,
// //     private classService: ClassService,
// //     private studentService: StudentService
// //   ) { }

// //   ngOnInit(): void {
// //     this.route.params.pipe(
// //       map(params => params['id']),
// //       switchMap(id => this.classService.getClassById(id))
// //     ).subscribe(classDetail => {
// //       this.classDetail = classDetail;
// //       this.numOfStudents = this.studentService.getStudentsByClass(classDetail.className);
// //     });
// //   }

// //   onDelete(id: string | undefined): void {
// //     if (id) {
// //       this.classService.deleteClass(id).subscribe(() => {
// //         this.router.navigate(['/classes']);
// //       });
// //     }
// //   }
// // }
