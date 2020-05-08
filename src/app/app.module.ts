import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { DebitComponent } from './debit/debit.component';
import { CreditComponent } from './credit/credit.component';
import { DebitUsingChequeComponent } from './debit-using-cheque/debit-using-cheque.component';
import { CreditUsingChequeComponent } from './credit-using-cheque/credit-using-cheque.component';
import { CreditUsingSlipComponent } from './credit-using-slip/credit-using-slip.component';
import { DebitUsingSlipComponent } from './debit-using-slip/debit-using-slip.component';
import { AccountDetailsComponent } from './account-details/account-details.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    DebitComponent,
    CreditComponent,
    DebitUsingChequeComponent,
    CreditUsingChequeComponent,
    CreditUsingSlipComponent,
    DebitUsingSlipComponent,
    AccountDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
