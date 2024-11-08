<<<<<<< HEAD
import { Component, HostListener } from '@angular/core';
import { Router } from '@angular/router';
=======
import { Component, ElementRef, HostListener } from '@angular/core';
>>>>>>> 637f16f4d161598304e0a1496d5e28b2fbc79017

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  private lastScrollPosition = 0;
  public isScrolledUp = false;
  isNavbarCollapsed = true;
<<<<<<< HEAD
  private highlightTimeout: any = null; // Timer per rimuovere l'evidenziazione

  constructor(private router: Router) {}
=======

  constructor(private el: ElementRef) {}
>>>>>>> 637f16f4d161598304e0a1496d5e28b2fbc79017

  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    const currentScrollPosition = window.pageYOffset || document.documentElement.scrollTop;
<<<<<<< HEAD
    this.isScrolledUp = currentScrollPosition < this.lastScrollPosition;
=======

    this.isScrolledUp = currentScrollPosition < this.lastScrollPosition;

>>>>>>> 637f16f4d161598304e0a1496d5e28b2fbc79017
    this.lastScrollPosition = currentScrollPosition;
  }

  getNavbarClasses() {
    return {
      'navbar-fixed-top': this.isScrolledUp,
      'navbar-static-top': !this.isScrolledUp
    };
  }

  toggleNavbar() {
    this.isNavbarCollapsed = !this.isNavbarCollapsed;
  }

<<<<<<< HEAD
  logout() {
    localStorage.removeItem('isAuthenticated');
    this.router.navigate(['/login']);
    localStorage.clear(); 
  }

  errorMessage: string | null = null;

  onSearch(query: string): void {
    this.errorMessage = null;
    const normalizedQuery = query.trim().toLowerCase();

    // Se c'era un precedente timeout, cancella l'evidenziazione
    if (this.highlightTimeout) {
        clearTimeout(this.highlightTimeout);
        this.removeHighlight(); // Rimuovi l'evidenziazione
    }

    if (normalizedQuery) {
        const foundElement = this.searchTextInDOM(normalizedQuery);

        if (foundElement) {
            foundElement.scrollIntoView({ behavior: 'smooth', block: 'center' });

            // Reset campo ricerca
            const searchBoxLarge = document.getElementById('searchBoxLarge') as HTMLInputElement;
            if (searchBoxLarge) {
                searchBoxLarge.value = ''; // Reset solo se l'elemento esiste
            }

            // Imposta il timeout per rimuovere l'evidenziazione dopo 3 secondi
            this.highlightTimeout = setTimeout(() => {
                this.removeHighlight();
            }, 3000); // Cambia il valore per la durata che preferisci
        } else {
            this.errorMessage = 'Nessun risultato trovato per: ' + query;
        }
    } else {
        this.errorMessage = 'Inserisci una parola chiave per la ricerca.';
    }
}

// Funzione che cerca il testo nel DOM e restituisce il primo elemento contenente il testo
private searchTextInDOM(query: string): HTMLElement | null {
    const elements = Array.from(document.querySelectorAll('*')); // Convertiamo in array

    for (let element of elements) {
        if (element.children.length === 0) { // Considera solo elementi senza figli (nodi foglia)
            const textContent = element.textContent;
            if (textContent && textContent.toLowerCase().includes(query)) {
                // Evidenzia la parola trovata
                const regex = new RegExp(`(${query})`, 'gi');
                element.innerHTML = textContent.replace(regex, `<span class="highlight">$1</span>`);
                return element as HTMLElement; // Restituisce l'elemento trovato
            }
        }
    }
    return null; // Nessun elemento trovato
}

// Metodo per rimuovere l'evidenziazione
private removeHighlight(): void {
    const highlightedElements = document.querySelectorAll('.highlight');

    highlightedElements.forEach(element => {
        const parent = element.parentNode;
        if (parent) {
            parent.replaceChild(document.createTextNode(element.textContent || ''), element);
        }
    });
}
}
=======
}
>>>>>>> 637f16f4d161598304e0a1496d5e28b2fbc79017
