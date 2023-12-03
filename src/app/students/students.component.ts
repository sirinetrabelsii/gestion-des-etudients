import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.scss'], 
})
export class StudentsComponent implements OnInit{
  student : any; 
  searchText = '';

  constructor(
    private http: HttpClient
  ) {
  }

  ngOnInit() {
    this.http.get('http://localhost:3001/etudiants').subscribe((data) => {
      this.student = data;
    });
  }
}
