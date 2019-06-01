import { Component, OnInit } from '@angular/core';

//importar la clase de services/tacos.service.ts
import {TacosService } from '../../services/tacos.service';
import { Taco } from 'src/app/models/taco';
import { AngularFirestore } from '@angular/fire/firestore';



@Component({
  selector: 'app-taqueria',
  templateUrl: './taqueria.component.html',
  styleUrls: ['./taqueria.component.css']
})
export class TaqueriaComponent implements OnInit {
//propiedad arreglo de tacos
  taqueria = [];
  editingTaqueria : Taco;
  editing :boolean= false;


  //instancia para el servicio
  constructor(public tacoService:TacosService,private db:AngularFirestore) { }


  //cuando el componente a sido inicializado proporciona los tacos

  ngOnInit() {
    this.tacoService = new TacosService(this.db);
    this.tacoService.getTacos().subscribe(tacos =>{
      // console.log(tacos);
      this.taqueria = tacos;
    } );
  }

  deleteTipoTaco(event, taqueria){
    this.tacoService.deleteTipoTaco(taqueria);
  }

  editTipoTaco(event, taqueria){
    this.editingTaqueria = taqueria;
    this.editing = !this.editing;
  }

  updateTipoTaco(){
    console.log(this.editTipoTaco);
    
    this.tacoService.updateTipoTaco(this.editingTaqueria);
    this.editingTaqueria = { } as Taco;
    this.editing = !this.editing;
  }
}
