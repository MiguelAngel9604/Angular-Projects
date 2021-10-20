import { Component, OnInit } from '@angular/core';
import { HeroesService } from '../Services/heroes.services';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-heroebusqueda',
  templateUrl: './heroebusqueda.component.html',
  styleUrls: ['./heroebusqueda.component.css']
})
export class HeroebusquedaComponent implements OnInit {

  heroe:any = {};

  busqueda:boolean=true;

  constructor(
    private heroeService:HeroesService,
    private activateRoute:ActivatedRoute,
    private _router:Router
  ) { }

  ngOnInit(): void {
    this.activateRoute.params.subscribe(name => {
     
        this.heroe = this.heroeService.searchHeroe(name['name'])
      //console.log(this.heroe[0].nombre);
      
      
  })
  }
  volver(){
    this._router.navigate(['/heroes'])  
    console.log("volviendo");
    
  }
  verHeroe(id:number){
    this._router.navigate(['/heroe',id])  
  console.log(id);
  
    }


}
