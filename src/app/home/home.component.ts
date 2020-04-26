import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public balance;
  accountNo:any;
  private router:Router;
  constructor(private route:ActivatedRoute,router:Router) { 
    this.router=router;
  }

  ngOnInit(): void {

    let id=this.route.snapshot.paramMap.get('accountNo');
    let bal=this.route.snapshot.paramMap.get('balance');
    this.balance=bal;
    this.accountNo=id;
  }
debit(){
  this.router.navigate(['/debit',this.accountNo]);
}
credit(){
  this.router.navigate(['/credit',this.accountNo]);
}
}
