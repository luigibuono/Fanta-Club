import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cookie-banner',
  templateUrl: './cookie-banner.component.html',
  styleUrls: ['./cookie-banner.component.css']
})
export class CookieBannerComponent implements OnInit {
  cookiesAccepted: boolean = false;

  ngOnInit(): void {
    // Verifica se i cookie sono stati accettati attraverso localStorage
    this.cookiesAccepted = localStorage.getItem('cookiesAccepted') === 'true';
  }

  // Funzione per gestire l'accettazione dei cookie
  acceptCookies(): void {
    localStorage.setItem('cookiesAccepted', 'true');
    this.cookiesAccepted = true;  // Nasconde il banner
  }
}
