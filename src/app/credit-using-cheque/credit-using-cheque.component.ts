import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { chequeTransactions, ChequeServiceService } from '../cheque-service.service';
import { account, LoginserviceService } from '../loginservice.service';

@Component({
  selector: 'app-credit-using-cheque',
  templateUrl: './credit-using-cheque.component.html',
  styleUrls: ['./credit-using-cheque.component.css']
})
export class CreditUsingChequeComponent implements OnInit {


  cheque: chequeTransactions = new chequeTransactions(0, "", "credit", "", "", "self", null, "", "", "");
  Account: account = new account(0, "");
  private router: Router;
  accountNo: any;
  details: any;
  message: any;
  constructor(private service: ChequeServiceService ,private route: ActivatedRoute, router: Router, private accountservice:LoginserviceService) {
    this.router=router;
   }

  ngOnInit(): void {
    let id = this.route.snapshot.paramMap.get('accountNo');
    this.accountNo = id;
  }

  credit_using_cheque() {
   
    if (this.cheque.payeeAccountNo == this.accountNo) {
      this.service.creditusingcheque(this.cheque).subscribe((data) =>this.message = data);
        if (this.message == null) {
          this.accountservice.getbalance(this.cheque.payeeAccountNo).subscribe((data) =>this.details = data);
            console.log(this.details);
            this.Account = this.details;
            console.log(this.Account.balance);
            this.router.navigate(['/home',this.cheque.payeeAccountNo,this.Account.balance]);
          
        }
        else {
          this.message = "Sorry!! transaction couldn't complete";
        }
      
    }
    else {
      this.message = "Sorry!! The given account no is not yours....!";
    }


  }
}
