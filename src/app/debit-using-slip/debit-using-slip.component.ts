import { Component, OnInit } from '@angular/core';
import { slipTransactions, SlipServiceService } from '../slip-service.service';
import { Router, ActivatedRoute } from '@angular/router';
import { LoginserviceService, account } from '../loginservice.service';

@Component({
  selector: 'app-debit-using-slip',
  templateUrl: './debit-using-slip.component.html',
  styleUrls: ['./debit-using-slip.component.css']
})
export class DebitUsingSlipComponent implements OnInit {

slip:slipTransactions=new slipTransactions(0,"","debit","",null);
Account:account=new account(0,"");
accountNo:any;
private router:Router;
message:any;
details:any;

  constructor(private service:SlipServiceService,router:Router,private route:ActivatedRoute,private accountservice:LoginserviceService) {
    this.router=router;
    
   }

   ngOnInit(): void {
    let id=this.route.snapshot.paramMap.get('accountNo');
    this.accountNo=id;
  }

debit_using_slip(){
  if(this.slip.accountNo !="" && this.slip.amount !=0 && this.slip.accountNo==this.accountNo)
  {
    this.service.debitusingslip(this.slip).subscribe((data)=>this.message=data);
    if(this.message==null)
    {
      this.accountservice.getbalance(this.slip.accountNo).subscribe((data)=>this.details=data);
      this.Account=this.details;
      console.log(this.Account.balance);
      this.router.navigate(['/home',this.slip.accountNo,this.Account.balance]);
    }
    else{
      this.message = "Sorry!! transaction couldnt complete";
    }
  }
  else{
    this.message = "Sorry!! give all the fields";
  }
}

}
