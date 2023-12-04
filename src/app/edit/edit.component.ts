import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {
  student: any;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private studentService: StudentService
  ) {}

  ngOnInit(): void {
    const studentId = this.route.snapshot.paramMap.get('id');

    if (studentId) {
      this.studentService.getStudentById(+studentId).subscribe((student) => {
        this.student = student;
      });
    }
  }

  updateStudent(): void {
    this.studentService.updateStudent(this.student.id, this.student).subscribe(() => {
      this.router.navigate(['/students']);
    });
  }
}
