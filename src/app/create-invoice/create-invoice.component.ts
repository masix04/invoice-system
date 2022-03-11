import { Component, OnInit } from '@angular/core';
import { Product } from '../models/product';

@Component({
  selector: 'app-create-invoice',
  templateUrl: './create-invoice.component.html',
  styleUrls: ['./create-invoice.component.css']
})
export class CreateInvoiceComponent implements OnInit {
  ProductName: any;
  PaymentType: any;
  ProdctPrice: any;
  paymentTypes = [];
  productModel = new Product('this.ProductName', 'this.PaymentType', 'this.ProdctPrice');
  constructor() {
    this.paymentTypes = ['Sale', 'Purchase'];
  }
  TransactionStore() {
    console.log('Submit Process Started.');
  }
  ngOnInit() {
  }

}
