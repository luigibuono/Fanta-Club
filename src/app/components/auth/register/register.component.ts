import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
<<<<<<< HEAD
import { Router } from '@angular/router';
=======
>>>>>>> 637f16f4d161598304e0a1496d5e28b2fbc79017

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
<<<<<<< HEAD
export class RegisterComponent implements OnInit {
  registrationForm: FormGroup;
  successMessage: string | null = null;
  errorMessage: string | null = null;

  constructor(private formBuilder: FormBuilder, private router: Router) {
    this.registrationForm = this.formBuilder.group({
      username: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', [Validators.required]]
=======
export class RegisterComponent implements OnInit{
  registrationForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.registrationForm = this.fb.group({
      username: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', [Validators.required]],
>>>>>>> 637f16f4d161598304e0a1496d5e28b2fbc79017
    }, { validators: this.passwordMatchValidator });
  }

  ngOnInit(): void {}

<<<<<<< HEAD
  passwordMatchValidator(form: FormGroup) {
    return form.get('password')?.value === form.get('confirmPassword')?.value ? null : { mismatch: true };
  }

  onSubmit(): void {
    if (this.registrationForm.valid) {
      const newUser = {
        username: this.registrationForm.value.username,
        email: this.registrationForm.value.email,
        password: this.registrationForm.value.password
      };

      // Salva l'utente nel localStorage
      localStorage.setItem(newUser.email, JSON.stringify(newUser));

      // Mostra messaggio di successo
      this.successMessage = 'Registrazione avvenuta con successo!';
      this.errorMessage = null;

      // Reindirizza alla pagina di login dopo 2 secondi
      setTimeout(() => {
        this.router.navigate(['/login']);
      }, 2000);
    } else {
      this.errorMessage = 'Compila tutti i campi correttamente.';
      this.successMessage = null;
=======
  passwordMatchValidator(formGroup: FormGroup) {
    return formGroup.get('password')?.value === formGroup.get('confirmPassword')?.value 
      ? null : { mismatch: true };
  }

  onSubmit() {
    if (this.registrationForm.valid) {
      // Logica per la registrazione dell'utente
      console.log('Form Submitted', this.registrationForm.value);
    } else {
      // Mostra messaggi di errore
      console.log('Form is invalid');
>>>>>>> 637f16f4d161598304e0a1496d5e28b2fbc79017
    }
  }
}
