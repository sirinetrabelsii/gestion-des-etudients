import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  country: any;
  constructor(private http: HttpClient) {}
  ngOnInit() {
    this.http.get('https://restcountries.com/v3.1/all').subscribe((data) => {
      this.country = data;
    });
  }
}
