import { Component } from '@angular/core';
<<<<<<< HEAD
import emailjs from 'emailjs-com';
=======
>>>>>>> 637f16f4d161598304e0a1496d5e28b2fbc79017

@Component({
  selector: 'app-premi',
  templateUrl: './premi.component.html',
  styleUrls: ['./premi.component.css']
})
export class PremiComponent {
<<<<<<< HEAD
  checklist = [
    { name: 'Opzione 1', selected: false, image: 'assets/banner1.jpg' },
    { name: 'Opzione 2', selected: false, image: 'assets/banner1.jpg' },
    { name: 'Opzione 3', selected: false, image: 'assets/banner1.jpg'},
    { name: 'Opzione 4', selected: false, image: 'assets/banner1.jpg' },
    { name: 'Opzione 5', selected: false, image: 'assets/banner1.jpg' },
    { name: 'Opzione 6', selected: false, image: 'assets/banner1.jpg' },
    { name: 'Opzione 7', selected: false, image: 'assets/banner1.jpg' },
    { name: 'Opzione 8', selected: false, image: 'assets/banner1.jpg'},
    { name: 'Opzione 9', selected: false, image: 'assets/banner1.jpg' },
    { name: 'Opzione 10', selected: false, image: 'assets/banner1.jpg' }
  ];

  // Variabili per gestire il messaggio di stato
  isEmailSent: boolean = false;
  emailError: string = '';

  onSubmit() {
    const selectedItems = this.checklist
      .filter(item => item.selected)
      .map(item => item.name);

    if (selectedItems.length > 0) {
      console.log('Opzioni selezionate:', selectedItems);
      this.sendEmail(selectedItems);
    } else {
      alert('Per favore, seleziona almeno un\'elemento.');
    }
  }

  sendEmail(selectedItems: string[]) {
    if (!Array.isArray(selectedItems) || selectedItems.length === 0) {
      console.error('selected_items non è un array valido o è vuoto');
      return;
    }

    const templateParams = {
      from_name: 'Luigi',
      to_email: 'dottorkalfast@gmail.com',
      selected_items: selectedItems
    };

    console.log('Template Params:', templateParams);

    emailjs.send('service_j8iuzux', 'template_zmqqlnq', templateParams, 'z7GWaQd6vsWLr8coT')
      .then(response => {
        console.log('Successo nell\'invio dell\'email:', response);
        this.isEmailSent = true;
        this.emailError = '';
      })
      .catch(error => {
        console.log('Errore nell\'invio dell\'email:', error);
        this.isEmailSent = false;
        this.emailError = 'Si è verificato un errore nell\'invio dell\'email. Riprova più tardi.';
      });
  }
=======

>>>>>>> 637f16f4d161598304e0a1496d5e28b2fbc79017
}
