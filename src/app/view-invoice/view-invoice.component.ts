import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import { environment } from 'src/environments/environment';
@Component({
  selector: 'app-view-invoice',
  templateUrl: './view-invoice.component.html',
  styleUrls: ['./view-invoice.component.css']
})
export class ViewInvoiceComponent implements OnInit {

   /**NOTE:: 
   * Brought Data From Database LIKE 
   */
  invoice = [];
  sales = [];
  purchases = [];

  constructor(private http: HttpClient) {
    this.http.get('http://localhost/i_voice/crud_modules/ViewInvoiceAction.php').subscribe(response => {
      this.invoice.push(response);
      console.log(this.invoice);
    },
    error => console.error(error));
  }
  calclateProfitLoss() {
    let salePrice:any, purchasePrice: any;
    this.invoice.forEach((product, index) => {
      if(product.type == "sale" || product.type == 'Sale') {
        this.sales.push(product.price);
        salePrice += product.price;
      } else {
        this.purchases.push(product.price);
        purchasePrice += product.price;
      }
      console.log(salePrice);
      console.log(purchasePrice);
    });
  }
  ngOnInit() { }
}