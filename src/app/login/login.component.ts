import { Component, OnInit } from '@angular/core';
import { LoginserviceService, Login } from '../loginservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

login:Login=new Login(0,"","","");
details:any;
  username: any;
  password: any;
  private router:Router;
  values:any;
  check:boolean=false;
  check1:boolean=false;
  constructor(private service:LoginserviceService,router:Router) {
    this.router=router;
   }

  ngOnInit(): void {
  }

  validate(){
  this.service.validateEmail(this.username,this.password).subscribe((data)=>this.details=data);
  this.login=this.details;
  if(this.login==null)
  {
    this.check=true;
    this.check1=false;
  }
  else
  {
    this.check1=true;
    this.check=false;
  }
}
}
