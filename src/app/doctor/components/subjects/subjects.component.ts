import { Component, OnInit } from '@angular/core';
import { DoctorService } from '../services/doctor.service';
import { AuthService } from 'src/app/services/auth/services/auth.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-subjects',
  templateUrl: './subjects.component.html',
  styleUrls: ['./subjects.component.css']
})
export class SubjectsComponent implements OnInit {
constructor(private service:DoctorService ,private auth:AuthService, private toastr:ToastrService){
}
subjects:any[]=[]
user:any = {}
ngOnInit(){
  this.getsubject()
  this.getUserInfo()
}

getsubject(){
  this.service.getAllSubjects().subscribe((res:any)=>{
    this.subjects=res
  })
}
getUserInfo() {
  this.auth.getRole().subscribe(res=> {    
    this.user = res
    console.log(this.user)
  })
}
delete(index:number){
  let id = this.subjects[index].id
  this.subjects.splice(index,1)
  this.service.deletesubject(id).subscribe((res:any)=>{
this.toastr.success("تم حذف المادة بنجاح")
  })
}
}
