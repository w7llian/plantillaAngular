import { Component, OnInit } from '@angular/core';
import { Producto } from 'src/app/interfaces/producto';
import { CarritoService } from 'src/app/services/carrito.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  carrito: Array<Producto> = [];

  constructor(
    private _carritoService: CarritoService
  ) { }

  ngOnInit(): void {
    this.getCarrito();
  }

  getCarrito() {
    this.carrito = this._carritoService.getCarrito();
  }

}
