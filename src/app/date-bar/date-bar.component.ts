import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-date-bar',
  templateUrl: './date-bar.component.html',
  styleUrls: ['./date-bar.component.css']
})
export class DateBarComponent implements OnInit {
  date: any;

  constructor(public datePipe: DatePipe) {
    this.date = new Date();
    setInterval(() => {
      this.date = Date.now();
    }, 30000);
    console.log(this.date);
   }

  ngOnInit() {
  }

}
