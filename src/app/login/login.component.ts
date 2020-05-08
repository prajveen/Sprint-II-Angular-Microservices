import { Component, OnInit } from '@angular/core';
import { LoginserviceService, Login, account} from '../loginservice.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  login: Login = new Login("", "", "");
  login1: Login = new Login("", "", "",);

  details: any;
  details1: any;
  username: any;
  password: any;
  private router: Router;
  values: any;
  check: boolean = false;
  check1: boolean = false;
  check3: any;

  constructor(private service: LoginserviceService, router: Router) {
    this.router = router;
  }

  ngOnInit(): void {
  }

  validate() {
    this.service.validateEmail(this.login.username, this.login.password).subscribe((data) => {
      this.details = data;
      this.login1 = this.details;
      console.log(this.login1);
      if (this.login1 == null) {
        alert("Ooops..! Invalid username/password .");
      }
      else {
        alert("Login Successfull");
        this.router.navigate(['/account']);
    
      }
    });


  }
}
