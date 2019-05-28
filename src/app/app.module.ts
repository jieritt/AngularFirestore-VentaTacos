import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TaqueriaComponent } from './components/taqueria/taqueria.component';
import { VentaComponent } from './components/venta/venta.component';
import { ChatbotComponent } from './components/chatbot/chatbot.component';

@NgModule({
  declarations: [
    AppComponent,
    TaqueriaComponent,
    VentaComponent,
    ChatbotComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
