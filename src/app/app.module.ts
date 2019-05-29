import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TaqueriaComponent } from './components/taqueria/taqueria.component';
import { VentaComponent } from './components/venta/venta.component';
import { ChatbotComponent } from './components/chatbot/chatbot.component';

import {AngularFireModule} from '@angular/fire';
import { environment } from '../environments/environment';
import {AngularFirestoreModule} from '@angular/fire/firestore';
import { FormVentasComponent } from './components/form-ventas/form-ventas.component';
@NgModule({
  declarations: [
    AppComponent,
    TaqueriaComponent,
    VentaComponent,
    ChatbotComponent,
    FormVentasComponent
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
