import { Component } from '@angular/core';
import { StudentService } from '../student.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent {
  formData: any = {};

  constructor(private studentService: StudentService, private router: Router) {}

  onSubmit(): void {
    const newStudent = {
      nom: this.formData.nom,
      email: this.formData.email,
      phoneNumber: this.formData.phoneNumber,
      dateInscription: new Date(), 
    };
    console.log(newStudent);
    
    this.studentService.addStudent(newStudent);
    this.router.navigate(['/students']);
    this.formData = {};
  }

}
