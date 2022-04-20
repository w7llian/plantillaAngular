import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { LandingComponent } from './landing/landing.component';
import { CatalogoComponent } from './catalogo/catalogo.component';
import { BannerComponent } from './banner/banner.component';



@NgModule({
  declarations: [
    NavbarComponent,
    LandingComponent,
    CatalogoComponent,
    BannerComponent
  ],
  exports: [
    NavbarComponent,
    LandingComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ComponentsModule { }
