import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Venta } from '../models/venta';
@Injectable({
  providedIn: 'root'
})
export class VentasService {
  ventasCollections: AngularFirestoreCollection<Venta>;
  ventas: Observable<Venta[]>;
  ventaDoc: AngularFirestoreDocument<Venta>;
  constructor(private db:AngularFirestore)
   {
     this.ventasCollections = this.db.collection("ventas");
     
     this.ventas = this.ventasCollections.snapshotChanges().pipe(
       map(
         actions => actions.map(
           a=>{
             const data = a.payload.doc.data() as Venta;
             data.idVenta = a.payload.doc.id;             
             return data;
           })
       ));

    }
    getVentas(){
      return this.ventas;
    }
  
    addVenta(venta:Venta){
      this.ventasCollections.doc(venta.idVenta).set(venta);
    }

  
   updateVenta(venta:Venta){
      this.ventaDoc = this.db.doc(`ventas/${venta.idVenta}`);
      this.ventaDoc.update(venta);
    }
}
