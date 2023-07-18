import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Register } from 'src/app/models/register';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  baseURL: string = 'http://localhost:3000/';
  // بستخدمها لما اعمل بوش للداتا واعمل سابسكريب عليها 
  users$ = new Subject<any>()
  constructor(private http: HttpClient) { }
  createuser(user:Register){
    return this.http.post<Register>(this.baseURL+'register',user)
  }
  getuser(type:string){
    return this.http.get(this.baseURL+type)
  }
  login(model:any){
    return this.http.put(this.baseURL+'login/1',model)
  }
  getStudent(id:number) {
    return this.http.get(this.baseURL+"register/"+id)
  }
  updateStudent(id:number , model:any) {
    return this.http.put(this.baseURL+"register/"+id , model)
  }
  getRole() {
    return this.http.get(this.baseURL+'login/1')
  }
}
