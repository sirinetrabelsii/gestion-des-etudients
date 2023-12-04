import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { StudentService } from '../student.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.scss'], 
})
export class StudentsComponent implements OnInit{
  student : any; 
  searchText = '';

  constructor(private studentService: StudentService, private router: Router) {}

  ngOnInit(): void {
    this.fetchStudents();
  }

  fetchStudents(): void {
    this.studentService.students$.subscribe((students) => {
      this.student = students;
    });

    this.studentService.getStudents();
  }
  addStudent(): void {
    this.router.navigate(['/add']);
  }

}
