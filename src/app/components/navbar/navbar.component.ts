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
  cont_carrito: number = 0;

  constructor(
    private _carritoService: CarritoService
  ) { }

  ngOnInit(): void {
    this.getCarrito();
    if(this.carrito !== null)
			this.cont_carrito = this.carrito.length;
		
		this._carritoService.dispachProductos.subscribe(() => {
			this.getCarrito();
			this.cont_carrito = this.carrito.length;
		});
  }

  getCarrito() {
    this.carrito = this._carritoService.getCarrito();
  }

}
