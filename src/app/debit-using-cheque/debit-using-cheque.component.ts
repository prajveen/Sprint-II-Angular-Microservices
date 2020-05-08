import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { chequeTransactions, ChequeServiceService } from '../cheque-service.service';
import { LoginserviceService, account } from '../loginservice.service';

@Component({
  selector: 'app-debit-using-cheque',
  templateUrl: './debit-using-cheque.component.html',
  styleUrls: ['./debit-using-cheque.component.css']
})
export class DebitUsingChequeComponent implements OnInit {

  cheque: chequeTransactions = new chequeTransactions(0, "", "debit", 0, "", "", "self", null, "Pecunia_Bank", "", null);
  Account: account = new account("", "","",0,null);
  Account1: account = new account("", "","",0,null);
  private router: Router;
  accountNo: any;
  details: any;
  message: any;
  myDate = new Date();
  result: any;

  constructor(private service: ChequeServiceService, private route: ActivatedRoute, router: Router, private accountservice: LoginserviceService) {
    this.router = router;
  }

  ngOnInit(): void {
    let id = this.route.snapshot.paramMap.get('accountNo');
    this.accountNo = id;
  }

  numberofdays = (startDate, endDate) => {
    const start = new Date(startDate) //clone
    const end = new Date(endDate) //clone
    let dayCount = 0;
    while (end > start) {
      dayCount++
      start.setDate(start.getDate() + 1)
    }
    return dayCount
  }

  debit_using_cheque(): void {
    this.result = this.numberofdays(this.cheque.issueDate, this.myDate);
    console.log(this.result);
    if (this.result >= 90) {
      alert("check has been  expired ")
    }
    else if (this.result == 0) {
      alert("Improper date");
    }
    else {
      if (this.cheque.payeeAccountNo == this.accountNo) {
        if (this.cheque.amount <= 100 || this.cheque.amount >= 200000) {
          alert("The amount to be debited should be between 100-200000");
        }
        else {
          this.accountservice.getbalance(this.cheque.payeeAccountNo).subscribe((data) => {
            this.details = data;
            this.Account1 = this.details;
          });
          if (this.Account1.amount <= this.cheque.amount) {
            alert("Sorry..! You have insufficient balance to debit...!");
          }
          else {
            this.service.debitusingcheque(this.cheque).subscribe((data) => {
              this.message = data;
            });
            if (this.message == null) {
              alert("Transaction unsuccesfull");
            }
            else {
              this.accountservice.getbalance(this.cheque.payeeAccountNo).subscribe((data) => {
                this.details = data;
                this.Account = this.details;
                alert("Transaction succesfull");
                this.router.navigate(['/home', this.cheque.payeeAccountNo, this.Account.amount]);
              });
            }
          }
        }
      }
      else {
        alert("the Payee Account field should contain your accountId only");
      }
    }
  }

}
