import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth/services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  isMenuCollapsed=true;
  constructor(private service:AuthService) { }
  
  user:any = null
  ngOnInit(): void {
   this.service.users$.subscribe((res:any) => {
     if(res.role) {
       this.user = res
     }
     console.log(res)
   })
   
  }


  logout() {
    const model = {}
    this.service.login(model).subscribe(res => {
      this.user = null
      this.service.users$.next(res)
    })
  }
}

