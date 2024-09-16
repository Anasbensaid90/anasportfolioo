import { Injectable } from '@angular/core';

declare var Tawk_API: any; // Declare Tawk_API to avoid TS7022
declare var Tawk_LoadStart: Date; // Declare Tawk_LoadStart to avoid TS7022

@Injectable({
  providedIn: 'root'
})
export class TawkService {

  constructor() { }

  loadTawkTo() {
    Tawk_LoadStart = new Date(); // Initialize Tawk_LoadStart
    const s1 = document.createElement("script");
    const s0 = document.getElementsByTagName("script")[0];

    if (s0 && s0.parentNode) { // Check if s0 and its parentNode are not null
      s1.async = true;
      s1.src = 'https://embed.tawk.to/66e7c15850c10f7a00aa9e05/1i7skmhmp';
      s1.charset = 'UTF-8';
      s1.setAttribute('crossorigin', '*');
      s0.parentNode.insertBefore(s1, s0);
    }
  }
}
