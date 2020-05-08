import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export class Login {

  employeeID: string;
  username: string;
  password: string;


  constructor(employeeID: string, username: string, password: string) {

    this.employeeID = employeeID;
    this.username = username;
    this.password = password;

  }
}

export class account {

  accountId: string;
  branch: string;
  accountType: string;
  amount: number;
  lastUpdated: Date;




  constructor(accountId: string,
    branch: string,
    accountType: string,
    amount: number,
    lastUpdated: Date) {
    this.accountId=accountId;
    this.branch=branch;
    this.accountType=accountType;
    this.amount=amount;
    this.lastUpdated=lastUpdated;

  }

}

@Injectable({
  providedIn: 'root'
})
export class LoginserviceService {

  constructor(private http: HttpClient) { }

  public validateEmail(username: any, password: any) {
    return this.http.get("http://localhost:1809/login/validate/" + username + "/" + password, { responseType: 'json' });
  }
  public getbalance(accountId: string) {
    console.log(accountId);
    return this.http.get("http://localhost:1810/balance/getAccountbyID/" + accountId, { responseType: 'json' });
  }

}
