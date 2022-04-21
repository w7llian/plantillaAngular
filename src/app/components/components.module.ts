import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { LandingComponent } from './landing/landing.component';
import { CatalogoComponent } from './catalogo/catalogo.component';
import { BannerComponent } from './banner/banner.component';
import { ProductosComponent } from './productos/productos.component';
import { SwiperModule } from "swiper/angular";



@NgModule({
  declarations: [
    NavbarComponent,
    LandingComponent,
    CatalogoComponent,
    BannerComponent,
    ProductosComponent
  ],
  exports: [
    NavbarComponent,
    LandingComponent
  ],
  imports: [
    CommonModule,
    SwiperModule
  ]
})
export class ComponentsModule { }
