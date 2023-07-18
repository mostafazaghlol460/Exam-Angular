
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from'src/app/services/auth/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm!:FormGroup;
  users$:any[]=[]
  type:string="register"
  constructor(private http:HttpClient,private fb:FormBuilder,private services:AuthService,private router:Router , private toastr:ToastrService){
    this.loginForm = this.fb.group({
      type:[this.type],
      email:['' , [Validators.required , Validators.email]],
      password:['' , [Validators.required]],
    })
  }

ngOnInit():void{
  this.getUsers();
  
}


getRole(event:any) {
  this.type = event.value
  this.getUsers()
}
getUsers() {
  this.services.getuser(this.type).subscribe((res:any) => {
    this.users$= res
  })
}

submit() {
 

  let index = this.users$.findIndex(item => item.email == this.loginForm.value.email && item.password == this.loginForm.value.password  )
  if(index == -1) {
    this.toastr.error("الايميل او كلمة المرور غير صحيحة" , "" , {
      disableTimeOut: false,
      titleClass: "toastr_title",
      messageClass: "toastr_message",
      timeOut:5000,
      closeButton: true,
    })
  }else {
    const model = {
      username:this.users$[index].username,
      role:this.type,
      userId:this.users$[index].id
    }
    this.services.login(model).subscribe((res:any )=> {
      console.log(res)
      this.services.users$.next(res)
      this.toastr.success("تم تسجيل الدخول بنجاح" , "" , {
        disableTimeOut: false,
        titleClass: "toastr_title",
        messageClass: "toastr_message",
        timeOut:5000,
        closeButton: true,
      })
      this.router.navigate(['/subjects'],{ state: { res } })
      

    })
  }

}

}