import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


export class slipTransactions{
  transactionID:number;
  transactionDate:string;
  transactionType:string;
  accountNo:number;
  amount:number;
  constructor(transactionID:number ,transactionDate:string,transactionType:string,accountNo:number,amount:number){

    this.transactionID=transactionID;
    this.transactionDate=transactionDate;
    this.transactionType=transactionType;
    this.accountNo=accountNo;
    this.amount=amount;
  }
}


@Injectable({
  providedIn: 'root'
})
export class SlipServiceService {

  constructor(private http:HttpClient) { }

  public debitusingslip(debit:slipTransactions){   
    console.log(debit) 
    return this.http.put("http://localhost:1813/debit-using-slip/debit-amount",{responseType: 'json'});
  }
  public creditusingslip(credit:slipTransactions){   
    console.log(credit) 
    return this.http.put("http://localhost:1814/credit-using-slip/credit-amount",{responseType: 'json'});
  }

}
