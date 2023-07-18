import { RegisterComponent } from './component/register/register.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './component/login/login.component';
import { ExamComponent } from './student/components/exam/exam.component';
import { StudentsComponent } from './doctor/components/students/students.component';
import { SubjectsComponent } from './doctor/components/subjects/subjects.component';
import { NewExamComponent } from './doctor/components/new-exam/new-exam.component';
import { HomeComponent } from './shard/home/home.component';
import { ContactComponent } from './shard/contact/contact.component';
import { AboutComponent } from './shard/about/about.component';
const routes: Routes = [
  {path:'login' , component:LoginComponent},
  {path:'register' , component:RegisterComponent},
  {path:'exam/:id' , component:ExamComponent},
  {path:'students' , component:StudentsComponent},
  {path:'subjects' , component:SubjectsComponent},
  {path:'Contact',component:ContactComponent},
{path:'',component:HomeComponent},
{path:'About',component:AboutComponent},
  {path:'new-exam' , component:NewExamComponent},
  {path:'**' , redirectTo:'exam' , pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
