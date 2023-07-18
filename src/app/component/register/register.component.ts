import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder,Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Register } from 'src/app/models/register';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/services/auth/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  users$:any[]=[]
  userform!:FormGroup

  constructor(private fb:FormBuilder,private services:AuthService,private router:Router, private toaster:ToastrService){
    this.userform=this.fb.group({
      username:['',[Validators.required]],
      email:['',[Validators.required , Validators.email]],
      password:['',[Validators.required]],
      confirmPassword:['',[Validators.required]]
      
    })
  }
  ngOnInit():void{
 this.getuser()
  }
 
  getuser(){
    this.services.getuser('register').subscribe((res:any)=>{
this.users$=res
    })
  }
  onSubmit(){
    const user:Register=this.userform.value;
    let index=this.users$.findIndex(item=>item.email==this.userform.value.email)
    if(index!==-1){
      this.toaster.error("this email is used before","",{
      disableTimeOut: false,
      titleClass: "toastr_title",
      messageClass: "toastr_message",
      timeOut:5000,
      closeButton: true,
    })
    }else{
      this.services.createuser(user).subscribe((res:any)=>{
        this.toaster.success("register success","",{  disableTimeOut: false,
          titleClass: "toastr_title",
          messageClass: "toastr_message",
          timeOut:5000,
          closeButton: true,
        }) 
        const model = {
          username:res.username,
          role:"register",
          userId:res.id
        }
        this.services.login(model).subscribe((res:any )=> {
          this.services.users$.next=res
          })
          this.router.navigate(['/subjects'])
        })     
       
      
      };
      this.userform.reset();
  
    }
    }
  
    
