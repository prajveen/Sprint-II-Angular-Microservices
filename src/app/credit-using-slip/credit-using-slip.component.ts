import { Component, OnInit } from '@angular/core';
import { slipTransactions, SlipServiceService } from '../slip-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-credit-using-slip',
  templateUrl: './credit-using-slip.component.html',
  styleUrls: ['./credit-using-slip.component.css']
})
export class CreditUsingSlipComponent implements OnInit {

  slip:slipTransactions=new slipTransactions(0,"","credit",0,0)
  private router:Router;
  message:any;
  
    constructor(private service:SlipServiceService,router:Router) {
      this.router=router;
      
     }
  
    ngOnInit(): void {
    }
  
  credit_using_slip(){
    if(this.slip.accountNo !=0 && this.slip.amount !=0)
    {
      this.service.creditusingslip(this.slip).subscribe((data)=>this.message=data);
    }
    else{
      this.message = "Sorry!! employee was not inserted";
    }
  }
  
}
