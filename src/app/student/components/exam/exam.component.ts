import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { DoctorService } from 'src/app/doctor/components/services/doctor.service';
import { AuthService } from 'src/app/services/auth/services/auth.service';

@Component({
  selector: 'app-exam',
  templateUrl: './exam.component.html',
  styleUrls: ['./exam.component.css']
})
export class ExamComponent implements OnInit {
  id:any;
  subject:any;
  user:any;
  total:number=0;
  studentInfo :any;
  ShowResult:boolean=false;
  usersubjects:any[] = [];
  validExam:boolean = true;
constructor(private router:ActivatedRoute,private service:DoctorService,private toastr:ToastrService,private auth:AuthService){
  this.id=this.router.snapshot.paramMap.get('id')
  this.getSubjects()
  // this.getUserInfo()
  this.getLogedInUser()
}
ngOnInit():void{}
getSubjects(){
  this.service.getSubjects(this.id).subscribe((res:any)=>{
    this.subject=res

  })
}
// getUserInfo() {
//   this.auth.getRole().subscribe(res=> {
//     this.user = res
//   })
// }
getLogedInUser() {
  this.auth.getRole().subscribe(res=> {
    this.user = res
    this.getUserData()
  })
}

getUserData() {
  this.auth.getStudent(this.user.userId).subscribe((res:any) => {
    this.studentInfo = res
    this.usersubjects = res?.subjects ?  res?.subjects : [];
    this.checkValidExam()
  })
}
checkValidExam() {
  for(let x in this.usersubjects) { 
    if(this.usersubjects[x].id == this.id) {
      this.total = this.usersubjects[x].degree
       this.validExam = false;
       this.toastr.warning("لقد انجزت هذا الاختبار مسبقا")
    }
  }
}
getAnswer(event:any){
let value =event.value,
questionindex=event.source.name
this.subject.questions[questionindex].studentanswer=value
}
delete(index:number) {
  this.subject.questions.splice(index , 1)
  const model = {
    name:this.subject.name,
    questions:this.subject.questions
  }
  
  this.service.updateSubject(model , this.id).subscribe(res => {
    this.toastr.success("تم حذف السؤال بنجاح")
  })
} 
getResult(){
  this.total=0
for(let x in this.subject?.questions){
  if(this.subject?.questions[x].studentanswer==this.subject?.questions[x].correctAnswer){
this.total++
  }
}
this.ShowResult=true;

this.usersubjects.push({
  name:this.subject.name,
  id:this.id,
  degree:this.total
})
const model = {
  username: this.studentInfo.username,
  email: this.studentInfo.email,
  password: this.studentInfo.password,
  subjects : this.usersubjects
}
this.auth.updateStudent(this.user.userId , model).subscribe(res => {
  this.toastr.success("نم تسجيل النتيجه بنجاح")
})
console.log(this.total)
}
}
