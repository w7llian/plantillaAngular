import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
    private _carritoService: CarritoService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getCarrito();
    if(this.carrito !== null)
			this.cont_carrito = this.carrito.length;
		
		this._carritoService.dispachProductos.subscribe(() => {
			this.getCarrito();
			this.cont_carrito = this.carrito.length;
		});
    console.log('carrito', this.carrito);
  }

  getCarrito() {
    this.carrito = this._carritoService.getCarrito();
  }

  irCarrito(){
		let routerLink = '/carrito';
    this.router.navigate([routerLink]);
	}

  irCatalogo(){
		let routerLink = '/catalogo';
    this.router.navigate([routerLink]);
	}

  irInicio(){
		let routerLink = '';
    this.router.navigate([routerLink]);
	}

}
