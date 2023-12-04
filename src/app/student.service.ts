import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Student } from './models/Students';

@Injectable({
  providedIn: 'root',
})
export class StudentService {
  private apiUrl = 'http://localhost:3001/etudiants';
  private students: Student[] = [];
  private studentsSubject = new BehaviorSubject<Student[]>([]);

  students$ = this.studentsSubject.asObservable();

  constructor(private http: HttpClient) {}


  // addStudent(studentData: any): void {
  //   this.http.post<Student>(this.apiUrl, studentData).subscribe((addedStudent) => {
  //     this.students.push(addedStudent);
  //   });
  // }
  addStudent(studentData: any): void {
    this.http.post<Student>(this.apiUrl, studentData).subscribe((addedStudent) => {
      this.students.push(addedStudent);
      this.studentsSubject.next([...this.students]);
    });
  }
    
  getStudents(): void {
    this.http.get<any[]>(this.apiUrl).subscribe((data) => {
      this.students = data;
      this.studentsSubject.next([...this.students]); 
    });
  }
}
