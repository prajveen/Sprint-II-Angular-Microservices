import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public balance;
  accountNo:any;
  constructor(private route:ActivatedRoute) { }

  ngOnInit(): void {

    let id=this.route.snapshot.paramMap.get('accountNo');
    let bal=this.route.snapshot.paramMap.get('balance');
    this.balance=bal;
    this.accountNo=id;
  }

}
