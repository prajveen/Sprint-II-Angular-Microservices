import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-credit',
  templateUrl: './credit.component.html',
  styleUrls: ['./credit.component.css']
})
export class CreditComponent implements OnInit {
 
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
    this.router.navigate(['/creditusingcheque',this.accountNo]);
  }

  slip(){
    this.router.navigate(['/creditusingslip',this.accountNo]);
  }
}
