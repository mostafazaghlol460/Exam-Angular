
import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth/services/auth.service';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent  implements OnInit{
  dataSource:any=[]
  datatable:any=[]
  displayedColumns:any
  constructor(private service:AuthService) {
    this.displayedColumns = ['position', 'name', 'subjectName', 'degree'];
   }

  
  ngOnInit(): void {
    this.getStudents()
  }
  getStudents(){
    this.service.getuser('register').subscribe((res:any)=>{
this.dataSource=res.map((registr:any)=>{
  if(registr?.subjects) {
    return registr?.subjects?.map((sub:any) => {
      return {
        name:registr.username,
        subjectName:sub.name,
        degree:sub.degree
      }
    })
  }else {
    return [{
      name:registr.username,
      subjectName:"-",
      degree:"-"
    }]
  }
 
})
this.datatable=[];
this.dataSource.forEach((item:any) => {
  item.forEach((subitem:any) => {
  this.datatable.push({ name:subitem.name,
    subjectName:subitem.subjectName,
    degree:subitem.degree
  }
)  
  });
  
});
    })
  }

}
