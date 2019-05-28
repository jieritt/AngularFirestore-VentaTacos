import { Injectable } from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';
import {Taco} from '../models/taco';
import{Observable} from 'rxjs';

@Injectable({ 
  providedIn: 'root'
})
export class TacosService {

  tacosCollection;
  tacos:Observable<Taco> ;
  tacosDoc;

  constructor(db: AngularFirestore) { }
}
