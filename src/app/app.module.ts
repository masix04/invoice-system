import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule, DatePipe } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from  '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { DateBarComponent } from './date-bar/date-bar.component';
import { CreateInvoiceComponent } from './create-invoice/create-invoice.component';
import { ViewInvoiceComponent } from './view-invoice/view-invoice.component';
import { AppComponent } from './app.component';
import { ListingTabsComponent } from './listing-tabs/listing-tabs.component';
import { URLS } from './utils/URLS';

@NgModule({
  declarations: [AppComponent, DateBarComponent, ViewInvoiceComponent, ListingTabsComponent, CreateInvoiceComponent],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    // HttpHeaders
  ],
  providers: [DatePipe, URLS],
  bootstrap: [AppComponent]
})
export class AppModule { }
