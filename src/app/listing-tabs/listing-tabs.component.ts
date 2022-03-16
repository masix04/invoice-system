import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-listing-tabs',
  templateUrl: './listing-tabs.component.html',
  styleUrls: ['./listing-tabs.component.css']
})
export class ListingTabsComponent implements OnInit {
  currentTab: any;
  constructor(private activatedRoute: Router) {
    this.currentTab = 'create';
    // console.log(this.activatedRoute.url);

   }
   ngOnChanges() {
   }
  ngOnInit() {
  }

}
