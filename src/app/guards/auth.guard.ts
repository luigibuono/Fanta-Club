import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private router: Router) {}

  canActivate(): boolean {
    const user = localStorage.getItem('user');
    if (user) {
      // L'utente è autenticato, consenti l'accesso
      return true;
    } else {
      // L'utente non è autenticato, reindirizza alla pagina di login
      this.router.navigate(['/login']);
      return false;
    }
  }
}
