import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './component/login/login.component';
import { RegisterComponent } from './component/register/register.component';
import { ReactiveFormsModule } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import {MatInputModule} from '@angular/material/input';
import {MatRadioModule} from '@angular/material/radio';
import {MatStepperModule} from '@angular/material/stepper';
import { ToastrModule } from 'ngx-toastr';
import { NewExamComponent } from './doctor/components/new-exam/new-exam.component';
import { StudentsComponent } from './doctor/components/students/students.component';
import { SubjectsComponent } from './doctor/components/subjects/subjects.component';
import { ExamComponent } from './student/components/exam/exam.component';
import {MatTableModule} from '@angular/material/table';

import { NavbarComponent } from './shard/navbar/navbar.component';
import { FooterComponent } from './shard/footer/footer.component';
import { HomeComponent } from './shard/home/home.component';
import { AboutComponent } from './shard/about/about.component';
import { ContactComponent } from './shard/contact/contact.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    NewExamComponent,
    StudentsComponent,
    SubjectsComponent,
    ExamComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    ToastrModule.forRoot(),
    MatInputModule,
    MatStepperModule,
    MatRadioModule,
    MatTableModule,
    HttpClientModule,
    MatFormFieldModule,
    BrowserAnimationsModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
