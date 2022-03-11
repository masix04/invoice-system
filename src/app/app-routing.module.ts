import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { CreateInvoiceComponent } from './create-invoice/create-invoice.component';
import { ViewInvoiceComponent } from './view-invoice/view-invoice.component';

const routes: Routes = [
  {
    path: '', component: CreateInvoiceComponent
  },
  { path: 'invoices', component: CreateInvoiceComponent },

  { path: 'invoices/create-invoice', component: CreateInvoiceComponent },
  { path: 'invoices/view-invoice', component: ViewInvoiceComponent },

  { path: '**', redirectTo: 'invoices', pathMatch: 'full' },
]
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
})
export class AppRoutingModule { }
