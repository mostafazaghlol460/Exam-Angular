import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent  {
  namepattern = "^[ a-zA-Z][a-zA-Z ]*$";
  emailPattern = "[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$";
  flag=true;
  loginForm = new FormGroup({
    username: new FormControl("", [
      Validators.required,
      Validators.minLength(3),
      Validators.pattern(this.namepattern)
    ]),
    email: new FormControl("", [
      Validators.required,
      Validators.pattern(this.emailPattern)
    ]),
    msg: new FormControl("", [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(100),

    ]),
  });

  get getUsername() {
    return this.loginForm.controls['username']
  }
  get getemail() {
    return this.loginForm.controls['email']
  }

  get getmsg() {
    return this.loginForm.controls['msg']
  }

  login(e: Event) {
    e.preventDefault()
    if (this.loginForm.status == 'VALID') {
      this.flag = false
      console.log(this.loginForm.value.username)
      this.loginForm.reset()
    }
  }
}
