import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export class Login{

  accountID:number;
  username:string;
  password:string;
  security:string;
  
  constructor(accountID:number,username:string,password:string,security:string)
  {

      this.accountID=accountID;
      this.username=username;
      this.password=password;
      this.security=security;
         
      }
}

@Injectable({
  providedIn: 'root'
})
export class LoginserviceService {

  constructor(private http:HttpClient) { }

  public validateEmail(username:String,password:String){    
    return this.http.get("http://localhost:1809/login/validate/"+username+password,{responseType: 'json'});
  }

}
