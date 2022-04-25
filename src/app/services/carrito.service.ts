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

    if(localStorage.getItem('carrito')!==null){
      this.carrito = JSON.parse(localStorage.getItem('carrito')!);
      let temp = this.carrito.filter(unit => unit.codProducto === item.codProducto)[0];
      if(temp){
        temp.cantidad+=1;
        temp.montoTotal = temp.precio*temp.cantidad;
      }else {
        this.carrito.push(item);
      }
    }else{
      this.carrito = [];
      this.carrito.push(item);
    }
    
    

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
    console.log(JSON.parse(localStorage.getItem('carrito')!));
    return <Array<Producto>>JSON.parse(localStorage.getItem('carrito')!);
  }

  actualizarCarrito(lista: Array<Producto>){
    localStorage.setItem('carrito', JSON.stringify(lista));
  }
  
}
