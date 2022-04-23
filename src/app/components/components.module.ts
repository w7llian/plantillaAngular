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



@NgModule({
  declarations: [
    NavbarComponent,
    LandingComponent,
    CatalogoComponent,
    BannerComponent,
    ProductosComponent,
    OfertasComponent,
    FooterComponent
  ],
  exports: [
    NavbarComponent,
    LandingComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    SwiperModule
  ]
})
export class ComponentsModule { }
