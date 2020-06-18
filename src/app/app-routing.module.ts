import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AmountComponent } from './amount/amount.component';


const routes: Routes = [
  {
    path : 'amount',
    component : AmountComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
