import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-heroe-tarjeta',
  templateUrl: './heroe-tarjeta.component.html',
  styleUrls: ['./heroe-tarjeta.component.css']
})
export class HeroeTarjetaComponent implements OnInit {

  @Input() heroe:any={};
  @Input() index:number | undefined;
  @Input() verMas:boolean|undefined;
  @Output() heroeSelected:EventEmitter<number>;

  constructor(
    private _router:Router
    ) { 
      this.heroeSelected= new EventEmitter ();
    }

  ngOnInit(): void {
  }

  verHeroe(){
    //console.log(this.index);
    
   // this._router.navigate(['heroe',this.index])
   this.heroeSelected.emit(this.index);

  }

}
