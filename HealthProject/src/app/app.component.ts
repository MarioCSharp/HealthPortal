import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './app.component.html',
  styles: [],
})
export class AppComponent implements OnInit {
  navBarClass: string = '';

  constructor(private router: Router) {}

  ngOnInit() {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.updateNavBarClass(event.urlAfterRedirects);
      }
    });
  }

  updateNavBarClass(url: string) {
    if (url === '/home-page') {
      this.navBarClass = 'home-nav';
    } else if (url === '/about-page') {
      this.navBarClass = 'about-nav';
    } else if (url === '/contact-page') {
      this.navBarClass = 'contact-nav';
    } else if (url === '/bmi-page'){
      this.navBarClass = 'bmi-nav';
    }
  }
}
