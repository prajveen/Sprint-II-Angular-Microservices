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

  cheque: chequeTransactions = new chequeTransactions(0, "","debit","","", "self", null, "Pecunia_Bank","","");
  Account: account = new account(0,"");
  private router: Router;
  accountNo: any;
  details: any;
  message: any;

  constructor(private service: ChequeServiceService, private route: ActivatedRoute, router: Router, private accountservice: LoginserviceService) {
    this.router=router;
   }

  ngOnInit(): void {
    let id = this.route.snapshot.paramMap.get('accountNo');
    this.accountNo = id;
  }

  debit_using_cheque() {

    if (this.cheque.payeeAccountNo == this.accountNo) {
      this.service.debitusingcheque(this.cheque).subscribe((data) =>this.message = data);
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
