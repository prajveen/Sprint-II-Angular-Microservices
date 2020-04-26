import { Component, OnInit } from '@angular/core';
import { LoginserviceService, Login, account } from '../loginservice.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  login: Login = new Login("", "", "", "");
  login1: Login = new Login('', "", "", "");
  Account: account = new account(0, "");
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
    console.log(this.login.username, this.login.password);
    this.service.validateEmail(this.login.username, this.login.password).subscribe((data) => {
      this.details = data;
      this.login1 = this.details;
      if (this.login1 == null) {
        this.check = true;
        this.check1 = false;
      }
      else {
        this.check1 = true;
        this.check = false;
        this.service.getbalance(this.login1.accountID).subscribe((data) => {
          this.details1 = data;
          this.Account = this.details1;
          console.log(this.Account.balance);
          this.router.navigate(['/home', this.login1.accountID, this.Account.balance]);
        });
      }
    });


  }
}
