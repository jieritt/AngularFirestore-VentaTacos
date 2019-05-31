import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { DetalleVenta } from '../models/detalleVenta';
import { Venta } from '../models/venta';
@Injectable({
  providedIn: 'root'
})
export class DetalleventaService {
  detalleVentasCollections: AngularFirestoreCollection<DetalleVenta>;
  detalleVentas: Observable<DetalleVenta[]>;
  detalleVentaDoc: AngularFirestoreDocument<DetalleVenta>;
  detalleVenta: Observable<DetalleVenta[]>;
  detalleVentaCollections: AngularFirestoreCollection<DetalleVenta>;

  constructor(private db: AngularFirestore) { 
    this.detalleVentasCollections = this.db.collection("detalleventa");
     
     this.detalleVentas = this.detalleVentasCollections.snapshotChanges().pipe(
       map(
         actions => actions.map(
           a=>{
             const data = a.payload.doc.data() as DetalleVenta;
             data.idDetalle = a.payload.doc.id;             
             return data;
           })
       ));
  }
  getDetalleVentas(){
    return this.detalleVentas;
  }  
  addDetalleVenta(venta:DetalleVenta){
    this.detalleVentasCollections.add(venta);
  }


 updateDetalleVenta(detalleVenta:DetalleVenta){
    this.detalleVentaDoc = this.db.doc(`ventas/${detalleVenta.idDetalle}`);
    this.detalleVentaDoc.update(detalleVenta);
  }
}
