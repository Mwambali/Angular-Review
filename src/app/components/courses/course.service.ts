import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Course } from './models/course.model';

@Injectable({
  providedIn: 'root'
})
export class CourseService {
  private baseUrl = 'http://localhost:5000/api/courses';

  constructor(private http: HttpClient) { }

  createCourse(course: Course): Observable<Course> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post<Course>(`${this.baseUrl}/create`, course, { headers });
  }

  getCourses(): Observable<Course[]> {
    return this.http.get<Course[]>(this.baseUrl);
  }

  deleteCourse(id: string): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/delete/${id}`);
  }

  getCourseById(id: string): Observable<Course> {
    return this.http.get<Course>(`${this.baseUrl}/${id}`);
  }

  updateCourse(course: Course): Observable<void> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.patch<void>(`${this.baseUrl}/update/${course.id}`, course, { headers });
  }
}
