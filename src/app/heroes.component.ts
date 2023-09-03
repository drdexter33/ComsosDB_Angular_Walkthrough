import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent {
  addingHero = false;
  heroes: any= [];
  selectedHero: Hero;

  constructor(private heroService: HeroService) {}

  ngOnInit() {
    this.getHeroes();
  }

  cancel() {
    this.addingHero = false;
    this,this.selectedHero = null;
  }

  deleteHero(hero: Hero){
    this.heroService.deleteHero(hero).subscribe(res => {
      this.heroes = this.heroes.filter(h => h != hero);
      if(this.selectedHero === hero){
        this.selectedHero = null;
      }
    });
  }

  getHeroes(){
    return this.heroService.getHeroes.subscribe(heroes => {

    });

  };
}
