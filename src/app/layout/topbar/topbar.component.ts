// topbar.component.ts
import { BreakpointObserver } from '@angular/cdk/layout';
import { Component, ElementRef, Renderer2, ViewChild } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.scss'],
})
export class TopbarComponent {
  isMobile: boolean = false;
  isMenuOpen: boolean = false;  // Add this line

  @ViewChild('indicator') indicator!: ElementRef;

  private subscription!: Subscription;

  constructor(
    private observer: BreakpointObserver,
    private renderer: Renderer2,
    private el: ElementRef
  ) {}

  ngAfterViewInit() {
    this.subscription = this.observer
      .observe(['(max-width: 800px)'])
      .subscribe((res) => {
        this.isMobile = res.matches;
      });
  }

  setActive = (id: string) => {
    const navLink = this.el.nativeElement.querySelectorAll('.navItems a');
    navLink.forEach((e: HTMLElement) => {
      this.renderer.removeClass(e, 'active');
    });
    const activeLink = this.el.nativeElement.querySelector(
      `.navItems a[href='#${id}']`
    );
    this.renderer.addClass(activeLink, 'active');
  };

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  // Navigation Methods
  scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  toggleSidenav = () => {  // Add this method
    this.isMenuOpen = !this.isMenuOpen;
  };
}
