import { Component, OnInit } from '@angular/core';
import { VentasService } from 'src/app/services/ventas.service';
import { DetalleventaService } from 'src/app/services/detalleventa.service';
import { TacosService } from 'src/app/services/tacos.service';
import { DetalleVenta } from 'src/app/models/detalleVenta';
import { Venta } from 'src/app/models/venta';

@Component({
  selector: 'app-form-ventas',
  templateUrl: './form-ventas.component.html',
  styleUrls: ['./form-ventas.component.css']
})
export class FormVentasComponent implements OnInit {
  
  fecha = new Date;
  fechaFormateada:string;
  detVenta:DetalleVenta;
  detalleVenta:DetalleVenta[];
  venta:Venta;
  tacos=[];
  taco:string;
  cantidad;
  idVenta:string;
  total:number;

  
  constructor(private servicioVenta:VentasService,private servicioDetalle:DetalleventaService,private servicioTaco:TacosService) 
  { }

  ngOnInit() {    
      this.total=0;
  }

  registrarVenta(){
    this.fecha =new Date;
    this.fechaFormateada = this.fecha.toLocaleDateString();
    this.idVenta=this.fecha.getMilliseconds()+''+this.total;
  }
  agregarAPedido(){
    let pedido = this.taco.split('-');
    console.log(this.taco.split('-')[0]);
    this.detVenta.cantidad=this.cantidad;
    this.detVenta.idTaco = pedido[0];
    this.detVenta.subtotal = (this.cantidad * parseFloat(pedido[1]));    
    this.detalleVenta.push(this.detVenta);
    this.total+=this.detVenta.subtotal;
    this.detVenta = null as DetalleVenta;
    console.log(this.cantidad);
    
    
  }

}
