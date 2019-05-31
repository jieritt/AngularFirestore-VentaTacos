import { Component, OnInit } from '@angular/core';
//importar la clase de services/tacos.service.ts
import {TacosService } from '../../services/tacos.service';
import { Taco } from 'src/app/models/taco';

@Component({
  selector: 'app-form-taqueria',
  templateUrl: './form-taqueria.component.html',
  styleUrls: ['./form-taqueria.component.css']
})
export class FormTaqueriaComponent implements OnInit {

  taqueria = { } as Taco;

  constructor(public tacosService: TacosService) { 

  }

  

  ngOnInit() {
  }

  addTaco(){
    if(this.taqueria.tipo != '' && this.taqueria.precio != 0 && this.taqueria.existencia != ''){
      this.tacosService.addTaco(this.taqueria);
      this.taqueria = {} as Taco; //limpie el formulario
    }
    
    
  }

}
