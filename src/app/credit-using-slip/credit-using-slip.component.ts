import { Component, OnInit } from '@angular/core';
import { slipTransactions, SlipServiceService } from '../slip-service.service';
import { Router, ActivatedRoute } from '@angular/router';
import { account, LoginserviceService } from '../loginservice.service';

@Component({
  selector: 'app-credit-using-slip',
  templateUrl: './credit-using-slip.component.html',
  styleUrls: ['./credit-using-slip.component.css']
})
export class CreditUsingSlipComponent implements OnInit {

  slip: slipTransactions = new slipTransactions(0, "", "credit", "", null)
  Account: account = new account("", "","",0,null);
  accountNo: any;
  private router: Router;
  message: any;
  details: any;
  details1: any;

  constructor(private service: SlipServiceService, router: Router, private route: ActivatedRoute, private accountservice: LoginserviceService) {
    this.router = router;

  }

  ngOnInit(): void {
    let id = this.route.snapshot.paramMap.get('accountNo');
    this.accountNo = id;
  }

  credit_using_slip() {
    if (this.slip.accountNo == this.accountNo) {
      if (this.slip.amount <= 100 || this.slip.amount >= 200000) {
        alert("The amount to be credited should be between 100-200000");
      }
      else {
        this.service.creditusingslip(this.slip).subscribe((data) => {
          this.message = data;
          this.details1 = this.message;
          if (this.details1 == null) {
            alert("Transaction unsuccesfull");
          }
          else {
            this.accountservice.getbalance(this.slip.accountNo).subscribe((data) => {
              this.details = data;
              this.Account = this.details;
              alert("Transaction succesfull");
              this.router.navigate(['/home', this.slip.accountNo, this.Account.amount]);
            });
          }
        });
      }
    }
    else {
      alert("the Payee Account field should contain your accountId only");
    }
  }

}
