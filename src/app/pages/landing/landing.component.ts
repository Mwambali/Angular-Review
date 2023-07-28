import { Component, OnInit } from '@angular/core';
import { AvatarGenerator } from 'random-avatar-generator';
// import { CourseService } from '../services/course.service';
// import { Course } from '../models/course.model';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {
  avatar!: string;

  ngOnInit(): void {
    this.generateRandomAvatar();
  }

  generateRandomAvatar(): void {
    const generator = new AvatarGenerator();
    this.avatar = generator.generateRandomAvatar();
  }
  // courses: Course[] = []; // Replace with your actual data from the CourseService

  // constructor(private courseService: CourseService) {
  //   // Fetch courses data from the service on component initialization
  //   this.courseService.getCourses().subscribe((courses) => {
  //     this.courses = courses;
  //   });
  // }
}
