import { Injectable } from '@angular/core';

import { Animal } from '../Animal';

import { HttpClient, HttpHeaders } from '@angular/common/http'

import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ListService {
  private apiUrl = 'http://localhost:3000/animals' // não tenho a api :(
  constructor(private http: HttpClient) { }


  remove(animals: Animal[], animal: Animal) {
    return animals.filter((a) => animal.name !== a.name)
  }

  showAge(animals: Animal[], animal: Animal) {
    return `O pet ${animal.name} tem ${animal.age} anos!`
  }

  getAll(): Observable<Animal[]> {
    return this.http.get<Animal[]>(this.apiUrl)
  }
}
