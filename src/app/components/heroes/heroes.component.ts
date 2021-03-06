import { Component, OnInit } from '@angular/core';
import { HeroesService, Heroe } from '../Services/heroes.services';
import { Router } from '@angular/router';


@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  heroes:Heroe[]=[];
  
  constructor(private _heroesService:HeroesService,
    private _router:Router
    ) { 

  }

  ngOnInit(): void {

    this.heroes = this._heroesService.getHeroes();
    console.log(this.heroes);
    
  }
  verHeroe(id:number){
  this._router.navigate(['/heroe',id])  

  }

}
