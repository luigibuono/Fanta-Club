import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  message: string | null = null; // Messaggio di successo o errore

  // Array fittizio di utenti registrati
  private registeredUsers = [
    { email: 'user@fantaclub.com', password: 'user123' },
    { email: 'admin@fantaclub.com', password: 'luigi16' }
  ];

  constructor(private formBuilder: FormBuilder, private router: Router) {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  ngOnInit(): void {
    // Controlla se l'utente è già loggato
    const user = localStorage.getItem('user');
    if (user) {
      this.router.navigate(['/']); // Reindirizza alla home se l'utente è già loggato
    }
  }

  onSubmit(): void {
    if (this.loginForm.valid) {
      const { email, password } = this.loginForm.value;

      // Controlla se le credenziali sono corrette
      const user = this.registeredUsers.find(
        (user) => user.email === email && user.password === password
      );

      if (user) {
        // Salva l'informazione di accesso
        localStorage.setItem('user', JSON.stringify(user));
        
        // Mostra un messaggio di successo
        this.message = 'Login effettuato con successo!';

        // Inizia il timer di logout automatico
        this.autoLogout();

        // Reindirizza alla home page
        this.router.navigate(['/']); // Naviga alla home page
      } else {
        // Mostra un messaggio di errore
        this.message = 'Credenziali non valide. Riprova.';
      }
    }
  }

  // Funzione per fare il logout automatico dopo 5 secondi
  autoLogout() {
    setTimeout(() => {
      // Rimuovi l'utente da localStorage per fare il logout
      localStorage.removeItem('user');

      // Mostra un messaggio di logout
      this.message = 'Sei stato disconnesso per inattività.';

      // Reindirizza l'utente alla pagina di login
      this.router.navigate(['/login']); // Reindirizza alla pagina di login
    }, 920000); // 5 secondi (5000 millisecondi)
  }
}
