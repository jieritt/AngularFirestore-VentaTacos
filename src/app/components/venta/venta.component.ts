import { Component, OnInit } from '@angular/core';
import { VentasService } from '../../services/ventas.service';
import { Venta } from '../../models/venta';
import { DetalleventaService } from 'src/app/services/detalleventa.service';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-venta',
  templateUrl: './venta.component.html',
  styleUrls: ['./venta.component.css']
})
export class VentaComponent implements OnInit {

  ventas: Venta[];    
  detVenta=[];
  venta:Venta;   
  idVenta:string;
  num:number;
  
  constructor(private servicioVenta:VentasService,private servicioDetalleV:DetalleventaService,private db:AngularFirestore) 
  { 
    this.num=0;
  }

  ngOnInit() {
    this.servicioVenta = new VentasService(this.db);
    this.servicioVenta.getVentas().subscribe(
      datos =>{this.ventas=datos;}
    );    
    
    
  }  


  cambiarEstado(ev,venta){
    this.venta=venta;
    this.venta.estado='cancelada';
    this.servicioVenta.updateVenta(this.venta);
  }
  verDetalle(ev,venta,indice){  
    this.idVenta=venta.idVenta;    
    for(let i=0;i<this.ventas.length;i++){
      if(indice==i)
        this.ventas[indice].verDetalle=!this.ventas[indice].verDetalle;
      else
        this.ventas[i].verDetalle=false;
    }
    this.servicioDetalleV.getDetalleVentas().subscribe(
      datos=>{
        this.detVenta=datos;                
      }
    );    
  }
  incNum(){
    try{
      ++this.num;

    }catch(Exception){}
  }

}
