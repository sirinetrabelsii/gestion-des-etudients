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
  getStudentById(studentId: number): Observable<Student> {
    const getUrl = `${this.apiUrl}/${studentId}`;
    return this.http.get<Student>(getUrl);
  }
  addStudent(studentData: any): void {
    this.http.post<Student>(this.apiUrl, studentData).subscribe((addedStudent) => {
      this.students.push(addedStudent);
      this.studentsSubject.next([...this.students]);
    });
  }
  deleteStudent(studentId: number): void {
    const deleteUrl = `${this.apiUrl}/${studentId}`;
    
    this.http.delete(deleteUrl).subscribe(() => {
      this.students = this.students.filter(student => student.id !== studentId);
      this.studentsSubject.next([...this.students]);
    });
  }
  updateStudent(studentId: number, updatedData: any): Observable<Student> {
    const updateUrl = `${this.apiUrl}/${studentId}`;
    return this.http.put<Student>(updateUrl, updatedData);
  }
  getStudents(): void {
    this.http.get<any[]>(this.apiUrl).subscribe((data) => {
      this.students = data;
      this.studentsSubject.next([...this.students]); 
    });
  }
}
