import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarritoComponent } from './components/carrito/carrito.component';
import { CatalogoComponent } from './components/catalogo/catalogo.component';
import { LandingComponent } from './components/landing/landing.component';
import { LoginComponent } from './components/login/login.component';
import { PedidoComponent } from './components/pedido/pedido.component';

const routes: Routes = [
  {path: '', component: LandingComponent,pathMatch: 'full'},
  {path: 'catalogo', component: CatalogoComponent},
  {path: 'carrito', component: CarritoComponent},
  {path: 'login', component: LoginComponent},
  {path: 'pedido', component: PedidoComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
