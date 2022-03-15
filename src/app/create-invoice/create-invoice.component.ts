import { Component, OnInit } from '@angular/core';
import { Product } from '../models/product';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { URLS } from '../utils/URLS';

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
  productModel = new Product('this.ProductName','this.ProductQuantity', 'this.PaymentType', 'this.ProdctPrice');
  constructor(public formBuilder: FormBuilder, private http: HttpClient,
              public urls: URLS) {
    this.paymentTypes = ['Sale', 'Purchase'];
  }
  // invoiceForm = this.formBuilder.group({
  //   name: '',
  //   type: '',
  //   price: '',
  // });
  /** NOTE:
   *  BElow Code Uses to create Reactive Forms Where in HTML No use of [(NgModel)]
   *
   *   Instead we use formControlName = ""
   *   In app.module.ts -> we USE / IMPORT ReactiveFormControl
   *
   */
  invoiceForm = new FormGroup({
    ProductName: new FormControl(),
    PaymentType: new FormControl(),
    ProductPrice: new FormControl(),
    ProductQuantity: new FormControl()
  })
  onTransactionStore() {
    console.log('Submit Process Started.');
    console.log(this.invoiceForm.value);
    this.FeedToDatabase(this.invoiceForm.value);
  }
  FeedToDatabase(DataArray: any) {
    this.http.get(this.urls.WorkBaseUrl+'insertAction.php?Name='+DataArray.ProductName+'&Quantity='+DataArray.ProductQuantity+'&Price='+DataArray.ProductPrice+'&Type='+DataArray.PaymentType, DataArray)
    .subscribe({
      next: (response) => console.log(response),
      error: (error) => console.log(error),
    });
  }
  ngOnInit() {
  }

}
