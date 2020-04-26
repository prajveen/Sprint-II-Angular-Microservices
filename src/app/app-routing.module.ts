import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { DebitComponent } from './debit/debit.component';
import { CreditComponent } from './credit/credit.component';
import { DebitUsingChequeComponent } from './debit-using-cheque/debit-using-cheque.component';
import { CreditUsingChequeComponent } from './credit-using-cheque/credit-using-cheque.component';
import { DebitUsingSlipComponent } from './debit-using-slip/debit-using-slip.component';
import { CreditUsingSlipComponent } from './credit-using-slip/credit-using-slip.component';


const routes: Routes = [
  { path: 'Login',component: LoginComponent},
  { path: 'home/:accountNo/:balance',component:HomeComponent},
  { path: 'debit/:accountNo',component:DebitComponent},
  { path: 'credit/:accountNo',component:CreditComponent},
  { path: 'debitusingcheque/:accountNo',component:DebitUsingChequeComponent},
  { path: 'creditusingcheque/:accountNo',component:CreditUsingChequeComponent},
  { path: 'debitusingslip/:accountNo',component:DebitUsingSlipComponent},
  { path: 'creditusingslip/:accountNo',component:CreditUsingSlipComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
