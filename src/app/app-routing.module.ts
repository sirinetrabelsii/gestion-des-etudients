import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentsComponent } from './students/students.component';
import { AddComponent } from './add/add.component';
import { EditComponent } from './edit/edit.component';
import { TeachersComponent } from './teachers/teachers.component';

const routes: Routes = [
  { path: 'add', component: AddComponent },
  { path: 'students', component: StudentsComponent }, 
  { path: 'teachers', component: TeachersComponent }, 
  { path: 'edit/:id', component: EditComponent }, 
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
