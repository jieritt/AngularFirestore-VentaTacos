import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VentaDetalleComponent } from './components/venta-detalle/venta-detalle.component';
import { TacosComponent } from './components/tacos/tacos.component';

const routes: Routes = [
  {path:'ventas',component:VentaDetalleComponent}
  ,
  {path:'',component:TacosComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
