import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first-component',
  templateUrl: './first-component.component.html',
  styleUrls: ['./first-component.component.css']
})
export class FirstComponentComponent implements OnInit {
  name = "Yuri"
  age = 22
  job = "Programmer"
  hobbies = ["Cozinhar", "Escutar Música", "Programar"]
  car = {
    name: "BMW",
    year: 2022,
  }

  constructor() { }

  ngOnInit(): void {
  }

}
