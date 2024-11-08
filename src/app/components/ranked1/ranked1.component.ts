import { Component } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-ranked1',
  templateUrl: './ranked1.component.html',
  styleUrls: ['./ranked1.component.css']
})
export class Ranked1Component {
  squadre: { nome: string; posizione: number }[] = [];

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.loadSquadre();
  }

  loadSquadre(): void {
    this.apiService.getSquadre().subscribe(
      (data) => {
        this.squadre = data.sort((a, b) => a.posizione - b.posizione);
      },
      (error) => {
        console.error('Errore nel recupero delle squadre:', error);
      }
    );
  }
}