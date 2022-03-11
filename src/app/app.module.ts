import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule, DatePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { DateBarComponent } from './date-bar/date-bar.component';
import { CreateInvoiceComponent } from './create-invoice/create-invoice.component';
import { ViewInvoiceComponent } from './view-invoice/view-invoice.component';
import { AppComponent } from './app.component';
import { ListingTabsComponent } from './listing-tabs/listing-tabs.component';

@NgModule({
  declarations: [AppComponent, DateBarComponent, CreateInvoiceComponent, ViewInvoiceComponent, ListingTabsComponent],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
