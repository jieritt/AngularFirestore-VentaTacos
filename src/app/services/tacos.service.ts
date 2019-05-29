import { Injectable } from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection,AngularFirestoreDocument} from '@angular/fire/firestore';
import {Taco} from '../models/taco';
import{Observable} from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({ 
  providedIn: 'root'
})
export class TacosService {

  tacosCollection: AngularFirestoreCollection<Taco>;
  tacos: Observable<Taco[]>;
  tacosDoc:AngularFirestoreDocument<Taco>; //hacer consulta

  
  constructor(public db: AngularFirestore) {
    //que la variable me devuelva un arreglo con los datos de la collection tacos
    //this.tacos = this.db.collection('tacos').valueChanges();
    //consulta para obtener el id
    this.tacosCollection = this.db.collection('tacos');
    this.tacos = this.tacosCollection.snapshotChanges().pipe(map(actions  =>{
      return actions.map(a =>{
        const data =a.payload.doc.data() as Taco;
        data.idProd = a.payload.doc.id;
        return data;
      });
    }));
   }
   //método para retornar atributos de la coleccion tacos
   getTacos(){
     return this.tacos;
   }
   addTaco(taco: Taco){
    this.tacosCollection.add(taco);
   }
   
   deleteTipoTaco(taco: Taco){
     //lo va a encontrar
     this.tacosDoc = this.db.doc(`tacos/${taco.idProd}`);
     //para borrar
     this.tacosDoc.delete();
   }
}
