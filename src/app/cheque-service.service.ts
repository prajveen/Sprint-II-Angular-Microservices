import { Injectable } from '@angular/core';

export class chequeTransactions{

  transactionID:number;
  transactionDate:string;
  transactionType:string;
  chequeID:string;
  payeeAccountNo:string;
  recipientAccountNo:string;
  amount:number;
  bankName:string;
  IFSC:string;
  issueDate:string;

  constructor(transactionID:number,transactionDate:string,transactionType:string,chequeID:string,payeeAccountNo:string,recipientAccountNo:string,amount:number,bankName:string,IFSC:string,issueDate:string){
    this.transactionID=transactionID;
    this.transactionDate=transactionDate;
    this.transactionID=transactionID;
    this.chequeID=chequeID;
    this.payeeAccountNo=payeeAccountNo;
    this.recipientAccountNo=recipientAccountNo;
    this.amount=amount;
    this.bankName=bankName;
    this.IFSC=IFSC;
    this.issueDate=issueDate;
    
  }
}


@Injectable({
  providedIn: 'root'
})
export class ChequeServiceService {

  constructor() { }
}
