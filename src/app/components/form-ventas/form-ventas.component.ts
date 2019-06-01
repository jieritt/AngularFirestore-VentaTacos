import { Component, OnInit } from '@angular/core';
import { VentasService } from 'src/app/services/ventas.service';
import { DetalleventaService } from 'src/app/services/detalleventa.service';
import { TacosService } from 'src/app/services/tacos.service';
import { DetalleVenta } from 'src/app/models/detalleVenta';
import { Venta } from 'src/app/models/venta';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-form-ventas',
  templateUrl: './form-ventas.component.html',
  styleUrls: ['./form-ventas.component.css']
})
export class FormVentasComponent implements OnInit {
    
  detVenta:DetalleVenta;
  detalleVenta:DetalleVenta[];  
  venta:Venta;
  tacos=[];
  taco:string;
  cantidad;  
  total:number;
  agotado='agotado';
  pedir=false;
  
  constructor(private servicioVenta:VentasService,private servicioDetalle:DetalleventaService,private servicioTaco:TacosService,private db:AngularFirestore) 
  {    
    
   }

  ngOnInit() {    
    this.servicioTaco = new TacosService(this.db);
    this.total=0;
    this.servicioTaco.getTacos().subscribe(
      datos=>{this.tacos=datos;
      }
    );
    this.taco='';
  this.cantidad=0;
  }

  registrarVenta(){
    let fecha =new Date;
    let fechaFormateada = fecha.toLocaleDateString();
    let idVenta=fecha.getMilliseconds()*parseInt((this.total/3)+'')+''+this.total;
    this.venta={
      'estado':'realizada',
      'fecha':fechaFormateada,
      'idVenta':idVenta,
      'total':this.total,
      'verDetalle':false
    };
    this.detalleVenta.forEach(detalle => {
      detalle.idVenta=idVenta;
      this.servicioDetalle.addDetalleVenta(detalle);
    });
    this.servicioVenta.addVenta(this.venta);
    this.cancelarVta();
    
  }
  agregarAPedido(){
    let pedido = this.taco.split('-');    
    if(this.cantidad<=0 || !pedido[0]){
      this.pedir=true;
      return;
    }
  
    this.detVenta={
      'cantidad':this.cantidad,
      'idTaco':pedido[0],
      'subtotal':(this.cantidad * parseFloat(pedido[1])),
      'tipoTaco':pedido[2]      
    };            
        
    if(this.detalleVenta==null)
      this.detalleVenta=[this.detVenta];
    else
    this.detalleVenta.push(this.detVenta);
    this.total+=this.detVenta.subtotal;
    this.detVenta = null as DetalleVenta;        
    this.taco='';
    this.cantidad=0;
    this.pedir=false;
    
    
  }
  cancelarVta(){
    this.taco='';
    this.cantidad=0;
    this.detVenta = null as DetalleVenta;
    this.detalleVenta = null as DetalleVenta[];    
    this.total=0;
  }

}
