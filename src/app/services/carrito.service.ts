import { EventEmitter, Injectable, Output } from '@angular/core';
import { Producto } from '../interfaces/producto';

@Injectable({
  providedIn: 'root'
})
export class CarritoService {

  carrito: Array<Producto> = [];

  constructor() {}

  @Output() dispachProductos: EventEmitter<any> = new EventEmitter();

  agregarCarrito(item : Producto){

    if(localStorage.getItem('carrito')!==null)
      this.carrito = JSON.parse(localStorage.getItem('carrito')!);
    else
      this.carrito = [];
    
    this.carrito.push(item);

    localStorage.setItem('carrito', JSON.stringify(this.carrito));

    this.dispachProductos.emit();
  }

  eliminarItem(index : number){
    let listadoProductos = this.getCarrito();
    listadoProductos.splice(index ,1);
    this.actualizarCarrito(listadoProductos);
    this.dispachProductos.emit();
  }

  getCarrito(): Array<Producto>{
    return <Array<Producto>>JSON.parse(localStorage.getItem('carrito')!);

  }

  actualizarCarrito(lista: Array<Producto>){
    localStorage.setItem('carrito', JSON.stringify(lista));
  }
  
}
