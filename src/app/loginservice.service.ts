import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export class Login{

  accountID:string;
  username:string;
  password:string;
  security:string;
  
  constructor(accountID:string,username:string,password:string,security:string)
  {

      this.accountID=accountID;
      this.username=username;
      this.password=password;
      this.security=security;
         
      }
}

export class account{

  balance:number;
  accountID:string;
  

  constructor(balance:number,accountID:string){
    this.balance=balance;
    this.accountID=accountID;
   
  }

}

@Injectable({
  providedIn: 'root'
})
export class LoginserviceService {

  constructor(private http:HttpClient) { }

  public validateEmail(username:any,password:any){    
    return this.http.get("http://localhost:1809/login/validate/"+username+"/"+password,{responseType: 'json'});
  }
  public getbalance(accountID:string){    
    return this.http.get("http://localhost:1810/balance/getAccountbyID/"+accountID,{responseType: 'json'});
  }
  
}
