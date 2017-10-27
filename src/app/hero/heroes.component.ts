import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Hero } from '../hero';
import { HeroService } from '../services/hero.service';


@Component({
    selector: 'my-heroes',
    styleUrls: ['./heroes.component.css'],

    templateUrl: './heroes.component.html'
})
export class HeroesComponent implements OnInit {
    public heroes: Array<Hero>;
    public selectedHero: Hero;

    constructor(private router: Router, private heroService: HeroService) {}

    ngOnInit(): void {
        this.getHeroes();
    }

    public getHeroes(): void {
        this.heroService.getHeroes().then(heroes => this.heroes = heroes);
    }

    public onSelect(hero: Hero): void {
        this.selectedHero = hero;
    }

    public gotoDetail(): void {
        this.router.navigate(['/detail', this.selectedHero.id]);
    }
}
