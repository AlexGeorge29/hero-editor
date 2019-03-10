import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HEROES } from '../mock-heroes';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})

export class HeroesComponent implements OnInit {

  // hero = 'Windstorm'; // parametre du composant appele hero.
  // Creqctoin d'un objet hero avec class def dans app.
  // hero: Hero = {
    // id: 1,
    // name: 'Windstorm'
  //};
  heroes = HEROES;
  selectedHero: Hero;
  constructor() { }

  ngOnInit() {
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
}
