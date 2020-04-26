import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-credit-using-cheque',
  templateUrl: './credit-using-cheque.component.html',
  styleUrls: ['./credit-using-cheque.component.css']
})
export class CreditUsingChequeComponent implements OnInit {

  private router:Router;
  accountNo:any;
  constructor(private route:ActivatedRoute,router:Router) { }

  ngOnInit(): void {
    let id=this.route.snapshot.paramMap.get('accountNo');
    this.accountNo=id;
  }

}
