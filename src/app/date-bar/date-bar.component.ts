import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-date-bar',
  templateUrl: './date-bar.component.html',
  styleUrls: ['./date-bar.component.css']
})
export class DateBarComponent implements OnInit {
  date = new Date();

  constructor(public datePipe: DatePipe) {
    console.log(this.date);
   }

  ngOnInit() {
  }

}
