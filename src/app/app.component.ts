import { Component, ViewEncapsulation} from '@angular/core';
import { Router,NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class AppComponent {
  title = 'profit-loss-invoice';
  route_path: any;

  constructor(public router:Router) {

    /** NOTE: Getting URL */
    router.events.pipe(filter((event) => event instanceof NavigationEnd)).subscribe(val => {
      this.route_path = val['url'];
      console.log(this.route_path);
    });
  }
}
