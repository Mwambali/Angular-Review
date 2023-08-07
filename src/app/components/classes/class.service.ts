import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Class } from './models/class.model';

@Injectable({
  providedIn: 'root',
})
export class ClassService {
  private baseUrl = 'http://localhost:5000/api/classes';

  constructor(private http: HttpClient) { }

  getClasses(): Observable<Class[]> {
    return this.http.get<Class[]>(this.baseUrl);
  }

  getClassById(id: string): Observable<Class> {
    return this.http.get<Class>(`${this.baseUrl}/${id}`);
  }

  createClass(className: string): Observable<Class> {
    return this.http.post<Class>(`${this.baseUrl}/create`, { className });
  }

  updateClass(id: string, className: string): Observable<void> {
    return this.http.patch<void>(`${this.baseUrl}/update/${id}`, { className });
  }

  deleteClass(id: string): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/delete/${id}`);
  }
}
