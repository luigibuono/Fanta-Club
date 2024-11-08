import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { Squadra } from '../models/Squadra';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private apiUrl = 'http://localhost:8080/nomi';
  
  constructor(private http: HttpClient) { }

  private searchSubject = new Subject<string>();
  search$ = this.searchSubject.asObservable();

  // Metodo per inviare la query di ricerca
  search(term: string): void {
    this.searchSubject.next(term);
  }
  
  getSquadre(): Observable<Squadra[]> {
    return this.http.get<Squadra[]>(this.apiUrl);
  }

  login(credentials: { email: string; password: string }): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/login`, credentials);
  }

}
