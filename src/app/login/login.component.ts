import { Component, OnInit } from '@angular/core';
import { LoginserviceService, Login } from '../loginservice.service';

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
  constructor(private service:LoginserviceService) { }

  ngOnInit(): void {
  }

  validate(){
  this.service.validateEmail(this.username,this.password).subscribe((data)=>this.details=data);
  }
}
