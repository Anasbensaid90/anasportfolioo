import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';
import * as Aos from 'aos';
import { TawkService } from './tawk.service';  // Import the TawkService

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'Joefolio';
  isConfirmationRoute: boolean = false;

  // Inject TawkService into the constructor
  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private tawkService: TawkService  // Inject the TawkService
  ) {
    router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe(() => {
        this.isConfirmationRoute =
          activatedRoute.firstChild?.snapshot.routeConfig?.path === 'confirm';
      });
  }

  ngOnInit() {
    Aos.init();  // Initialize AOS for animations

    // Call the Tawk.to script loader method from the service
    this.tawkService.loadTawkTo();
  }
}
