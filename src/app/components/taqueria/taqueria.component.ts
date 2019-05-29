import { Component, OnInit } from '@angular/core';

//importar la clase de services/tacos.service.ts
import {TacosService } from '../../services/tacos.service';



@Component({
  selector: 'app-taqueria',
  templateUrl: './taqueria.component.html',
  styleUrls: ['./taqueria.component.css']
})
export class TaqueriaComponent implements OnInit {
//propiedad arreglo de tacos
  taqueria = [];


  //instancia para el servicio
  constructor(public tacoService:TacosService) { }


  //cuando el componente a sido inicializado proporciona los tacos

  ngOnInit() {
    this.tacoService.getTacos().subscribe(tacos =>{
      console.log(tacos);
      this.taqueria = tacos;
    } );
  }

  deleteTipoTaco(event, taqueria){
    this.tacoService.deleteTipoTaco(taqueria);
  }

}
