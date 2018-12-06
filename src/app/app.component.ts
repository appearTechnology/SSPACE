import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'nexus';
  constructor(private router: Router) {
    //subscribes every changes of your route
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        //scroll to top
        window.scrollTo(0, 0);
      }
    })
  }
}
