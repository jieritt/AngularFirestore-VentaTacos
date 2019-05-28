import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TaqueriaComponent } from './components/taqueria/taqueria.component';
import { VentaComponent } from './components/venta/venta.component';
import { ChatbotComponent } from './components/chatbot/chatbot.component';

import {AngularFireModule} from '@angular/fire';
import { environment } from '../environments/environment';
import {AngularFirestoreModule} from '@angular/fire/firestore';
@NgModule({
  declarations: [
    AppComponent,
    TaqueriaComponent,
    VentaComponent,
    ChatbotComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
