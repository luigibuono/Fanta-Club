import { Component } from '@angular/core';
<<<<<<< HEAD
import { ApiService } from 'src/app/services/api.service';
=======
>>>>>>> 637f16f4d161598304e0a1496d5e28b2fbc79017

@Component({
  selector: 'app-ranked3',
  templateUrl: './ranked3.component.html',
  styleUrls: ['./ranked3.component.css']
})
export class Ranked3Component {
<<<<<<< HEAD
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
=======

>>>>>>> 637f16f4d161598304e0a1496d5e28b2fbc79017
}
