import { Component, OnInit } from '@angular/core';
import { slipTransactions, SlipServiceService } from '../slip-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-debit-using-slip',
  templateUrl: './debit-using-slip.component.html',
  styleUrls: ['./debit-using-slip.component.css']
})
export class DebitUsingSlipComponent implements OnInit {

slip:slipTransactions=new slipTransactions(0,"","debit",0,0)
private router:Router;
message:any;

  constructor(private service:SlipServiceService,router:Router) {
    this.router=router;
    
   }

  ngOnInit(): void {
  }

debit_using_slip(){
  if(this.slip.accountNo !=0 && this.slip.amount !=0)
  {
    this.service.debitusingslip(this.slip).subscribe((data)=>this.message=data);
  }
  else{
    this.message = "Sorry!! employee was not inserted";
  }
}

}
