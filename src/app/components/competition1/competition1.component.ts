import { Component, OnInit } from '@angular/core';
import { Squadra } from 'src/app/models/Squadra';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-competition1',
  templateUrl: './competition1.component.html',
  styleUrls: ['./competition1.component.css']
})
export class Competition1Component implements OnInit {
  squadre: { nome: string }[] = []; // Array per le squadre
  newSquadra: string = ''; // Variabile per il nome della nuova squadra

  ngOnInit(): void {
    // Carica le squadre salvate in localStorage
    const savedSquadre = localStorage.getItem('squadre');
    if (savedSquadre) {
      this.squadre = JSON.parse(savedSquadre);
    }
  }

  // Aggiunge una nuova squadra e aggiorna localStorage
  addSquadra(): void {
    if (this.newSquadra.trim()) {
      this.squadre.push({ nome: this.newSquadra.trim() });
      this.newSquadra = '';
      this.saveSquadre();
    }
  }

  // Rimuove una squadra per indice e aggiorna localStorage
  removeSquadra(index: number): void {
    this.squadre.splice(index, 1);
    this.saveSquadre();
  }

  // Salva le squadre in localStorage
  saveSquadre(): void {
    localStorage.setItem('squadre', JSON.stringify(this.squadre));
  }

  // Ottiene le righe da visualizzare nella tabella
  getRows(): any[] {
    return new Array(Math.ceil(this.squadre.length / 2));
  }

}
