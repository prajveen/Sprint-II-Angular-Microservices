import { Component, OnInit } from '@angular/core';
import { LoginserviceService, account } from '../loginservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-account-details',
  templateUrl: './account-details.component.html',
  styleUrls: ['./account-details.component.css']
})
export class AccountDetailsComponent implements OnInit {
  router: Router;
  details1: Object;
  Account1: any;
  Account: account = new account("", "","",0,null);
  constructor(private service: LoginserviceService, router: Router) {
    this.router = router;

  }
  ngOnInit(): void {
  }

  accountValidatiion() {
    this.service.getbalance(this.Account.accountId).subscribe((data) => {
      this.details1 = data;
      this.Account1 = this.details1;
      if (this.Account1 == null) {
        alert("Account ID doesn't exists");
      }
      else {
        this.router.navigate(['/home', this.Account1.accountId, this.Account1.amount]);
      }
    });
  }
}
