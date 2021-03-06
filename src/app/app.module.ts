import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TaqueriaComponent } from './components/taqueria/taqueria.component';
import { VentaComponent } from './components/venta/venta.component';


import {AngularFireModule} from '@angular/fire';
import { environment } from '../environments/environment';
import {AngularFirestoreModule} from '@angular/fire/firestore';
import { FormVentasComponent } from './components/form-ventas/form-ventas.component';
import { FormTaqueriaComponent } from './components/form-taqueria/form-taqueria.component';
import { CabeceraComponent } from './components/cabecera/cabecera.component';
import { VentaDetalleComponent } from './components/venta-detalle/venta-detalle.component';
import { TacosComponent } from './components/tacos/tacos.component';
@NgModule({
  declarations: [
    AppComponent,
    TaqueriaComponent,
    VentaComponent,    
    FormVentasComponent,
    FormTaqueriaComponent,
    CabeceraComponent,
    VentaDetalleComponent,
    TacosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    FormsModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
