import { Component, OnInit } from '@angular/core';
import { Producto } from 'src/app/interfaces/producto';
import { CarritoService } from 'src/app/services/carrito.service';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent implements OnInit {

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

  sumar(item: Producto){
    item.cantidad += 1;
    item.montoTotal = item.precio*item.cantidad;
  }

  restar(item: Producto){
    if(item.cantidad !== 0){
      item.cantidad -= 1;
      item.montoTotal = item.precio*item.cantidad;
    }
  }

}
