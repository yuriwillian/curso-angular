import { Injectable } from '@angular/core';

import { Animal } from '../Animal';

@Injectable({
  providedIn: 'root'
})
export class ListService {

  constructor() { }


  remove(animals: Animal[], animal: Animal) {
    return animals.filter((a) => animal.name !== a.name)
  }

  showAge(animals: Animal[], animal: Animal) {
    return `O pet ${animal.name} tem ${animal.age} anos!`
  }

  getAll() {
    
  }
}
