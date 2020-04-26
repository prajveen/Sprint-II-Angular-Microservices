import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-debit',
  templateUrl: './debit.component.html',
  styleUrls: ['./debit.component.css']
})
export class DebitComponent implements OnInit {

  private router:Router;
  accountNo:any;
  constructor(private route:ActivatedRoute,router:Router) {
    this.router=router;
   }

  ngOnInit(): void {
    let id=this.route.snapshot.paramMap.get('accountNo');
    this.accountNo=id;
  }

  cheque(){
    this.router.navigate(['/debitusingcheque',this.accountNo]);
  }

  slip(){
    this.router.navigate(['/debitusingslip',this.accountNo]);
  }
}
