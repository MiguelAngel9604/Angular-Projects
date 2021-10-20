import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Routes } from '@angular/router';
import { HeroesService } from '../Services/heroes.services';
import { Router } from '@angular/router';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.css']
})
export class HeroeComponent implements OnInit {

  heroe:any = {};

  constructor(private activateRoute: ActivatedRoute, private heroeService:HeroesService,
    private _router:Router) {

    this.activateRoute.params.subscribe(parma => {
      this.heroe = this.heroeService.getHeroe(parma['id'])
      console.log(this.heroe);
      
    })
   }

  ngOnInit(): void {
  }
  volver(){
    this._router.navigate(['/heroes'])  
    console.log("volviendo");
    
  }

}
