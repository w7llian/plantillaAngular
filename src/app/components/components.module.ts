import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { LandingComponent } from './landing/landing.component';
import { CatalogoComponent } from './catalogo/catalogo.component';
import { BannerComponent } from './banner/banner.component';
import { ProductosComponent } from './productos/productos.component';
import { SwiperModule } from "swiper/angular";
import { OfertasComponent } from './ofertas/ofertas.component';
import { FooterComponent } from './footer/footer.component';
import { CarritoComponent } from './carrito/carrito.component';
import { LoginComponent } from './login/login.component';
import { PedidoComponent } from './pedido/pedido.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    NavbarComponent,
    LandingComponent,
    CatalogoComponent,
    BannerComponent,
    ProductosComponent,
    OfertasComponent,
    FooterComponent,
    CarritoComponent,
    LoginComponent,
    PedidoComponent
  ],
  exports: [
    NavbarComponent,
    LandingComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    SwiperModule,
    FormsModule,
    RouterModule
  ]
})
export class ComponentsModule { }
