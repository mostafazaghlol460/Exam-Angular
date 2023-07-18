import { Component, OnInit } from '@angular/core';
import { AuthService } from './services/auth/services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'final';
  constructor(private services:AuthService){}
  ngOnInit():void{
    this.getuserdata()
  }
  getuserdata(){
    this.services.getRole().subscribe((res:any)=>{
  this.services.users$.next(res)
    })
  }
}
