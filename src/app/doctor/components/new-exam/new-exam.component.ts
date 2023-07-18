// import { Router } from '@angular/router';
// import { ToastrService } from 'ngx-toastr';
// import { Component, OnInit } from '@angular/core';
// import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
// import { DoctorService } from '../services/doctor.service';
// @Component({
//   selector: 'app-new-exam',
//   templateUrl: './new-exam.component.html',
//   styleUrls: ['./new-exam.component.css']
// })
// export class NewExamComponent implements OnInit {
//   questionform!:FormGroup;
//   name=new FormControl("");
//   subjectName:any="";
//   stepperIndex=0;
//   questions:any[]=[];
//   correctNUM:any;
//   startAdd:boolean=false;
//   preview:boolean=false;
//   id:any;
  
// constructor(private fb:FormBuilder,private toastr:ToastrService,private services:DoctorService, private router:Router){}

// ngOnInit():void{
//   this.createform()
// }
// createform(){
//  this.questionform=this.fb.group({
//   question:['',[Validators.required]],
//   answer1:['',[Validators.required]],
//   answer2:['',[Validators.required]],
//   answer3:['',[Validators.required]],
//   answer4:['',[Validators.required]],
 
//  }) 
// }
// createQuestion(){
// if(this.correctNUM){
//   const model ={
//     question:this.questionform.value.question,
//     answer1:this.questionform.value.answer1,
//     answer2:this.questionform.value.answer2,
//     answer3:this.questionform.value.answer3,
//     answer4:this.questionform.value.answer4,
//     correctAnswer:this.questionform.value[this.correctNUM]
//   }
//   this.questions.push(model)
//   this.questionform.reset()
// }else{
// this.toastr.error("يرجى ادخال اجابة صحيحة")
// }
// }
// start(){
//   if(this.name.value==""){
//     this.toastr.error("يرجى ادخال اسسم المادة")
//   }else{
//     this.startAdd=true
//     this.subjectName = this.name.value
//   }
//   if(this.startAdd){
//     this.stepperIndex=1
//   }
// }
// clearForm(){
//   this.questionform.reset()
// }
// cancel(){
//   this.questionform.reset()
//   this.questions=[];
//   this.subjectName="";
//   this.name.reset();
//   this.stepperIndex=0;
//   this.startAdd=false
// }
// getCorrect(event:any){
//   this.correctNUM = event.value
// }
// submit(){
//   this.createQuestion()
//   const model ={
// name:this.subjectName,
// questions:this.questions,
//   }

  
//   if(this.preview){
//     this.stepperIndex=2
//   }else{
//     this.services.createSubject(model).subscribe((res:any)=>{
//       this.preview=true;
//       this.id=res.id
//       console.log(res)
     
//     })
//   }
// }
// delete(index:number){
//   this.questions.splice(index,1)
//   const model ={
//     name:this.subjectName,
//     questions:this.questions,
//       }
  
//   this.services.updateSubject(model,this.id).subscribe((res:any)=>{
//     this.toastr.success("تم حذف السؤال بنجاح")
//   })
  

// }

// }
import { Router } from '@angular/router';

import { ToastrService } from 'ngx-toastr';

import { Component, OnInit } from '@angular/core';

import {

FormBuilder,

FormControl,

FormGroup,

Validators

} from '@angular/forms';

import { DoctorService } from '../services/doctor.service';

@Component({

selector: 'app-new-exam',

templateUrl: './new-exam.component.html',

styleUrls: ['./new-exam.component.css']

})

export class NewExamComponent implements OnInit {

name = new FormControl('');

questionForm!: FormGroup;

questions: any[] = [];

correctNum: any;

subjectName = '';

stepperIndex = 0;

startAdd: boolean = false;

preview: boolean = false;

id: any;

constructor(

private fb: FormBuilder,

private toaster: ToastrService,

private service: DoctorService

) {}




ngOnInit(): void {

this.createForm();

}




createForm() {

this.questionForm = this.fb.group({

question: ['', [Validators.required]],

answer1: ['', [Validators.required]],

answer2: ['', [Validators.required]],

answer3: ['', [Validators.required]],

answer4: ['', [Validators.required]]

});

}




createQuestion() {

if (this.correctNum) {

const model = {

question: this.questionForm.value.question,

answer1: this.questionForm.value.answer1,

answer2: this.questionForm.value.answer2,

answer3: this.questionForm.value.answer3,

answer4: this.questionForm.value.answer4,

correctAnswer: this.questionForm.value[this.correctNum]

};

this.questions.push(model);

this.questionForm.reset();

} else {

this.toaster.error('يرجي اختبار الاجابة الصحيحه');

}

console.log(this.questions);

}




start() {

if (this.name.value == '') {

this.toaster.error('يرجي ادخال اسم المادة');

} else {

this.startAdd = true;

this.subjectName = this.name.value ?? '';

}




if (this.startAdd) {

this.stepperIndex = 1;

}

}




clearForm() {

this.questionForm.reset();

}




cancel() {

this.questionForm.reset();

this.questions = [];

this.subjectName = '';

this.name.reset();

this.stepperIndex = 0;

this.startAdd = false;

}

getCorrect(event: any) {

this.correctNum = event.value;

}

submit() {

const model = {

name: this.subjectName,

questions: this.questions

};

console.log(this.preview);

if (this.preview) {

this.stepperIndex = 2;

} else {

this.service.createSubject(model).subscribe((res: any) => {

this.preview = true;

this.id = res.id;

});

}

}




delete(index: number) {

this.questions.splice(index, 1);

const model = {

name: this.subjectName,

questions: this.questions

};




this.service.updateSubject(model, this.id).subscribe(res => {

this.toaster.success('تم حذف السؤال بنجاح');

});

}

}
