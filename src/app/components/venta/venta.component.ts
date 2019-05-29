import { Component, OnInit } from '@angular/core';
import { VentasService } from '../../services/ventas.service';
import { Venta } from '../../models/venta';
import { DetalleventaService } from 'src/app/services/detalleventa.service';

@Component({
  selector: 'app-venta',
  templateUrl: './venta.component.html',
  styleUrls: ['./venta.component.css']
})
export class VentaComponent implements OnInit {

  ventas = [];    
  detVenta=[];
  venta:Venta;
  detalle:boolean=false;  
  num:number;
  constructor(private servicioVenta:VentasService,private servicioDetalleV:DetalleventaService) 
  { 
    this.num=0;
  }

  ngOnInit() {
    this.servicioVenta.getVentas().subscribe(
      datos =>{this.ventas=datos;}
    );    
  }  


  cambiarEstado(ev,venta){
    this.venta=venta;
    this.venta.estado='cancelada';
    this.servicioVenta.updateVenta(this.venta);
  }
  verDetalle(ev,venta){
    this.servicioDetalleV.getDetalleVenta(venta).subscribe(
      datos=>{
        this.detVenta=datos;
      }
    );
    this.detalle = !this.detalle;
  }
  incNum(){
    try{
      ++this.num;

    }catch(Exception){}
  }

}
