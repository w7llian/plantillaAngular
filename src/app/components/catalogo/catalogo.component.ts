import { Component, OnInit } from '@angular/core';
import { Producto } from 'src/app/interfaces/producto';
import { CarritoService } from 'src/app/services/carrito.service';
import { ProductosService } from 'src/app/services/productos.service';

@Component({
  selector: 'app-catalogo',
  templateUrl: './catalogo.component.html',
  styleUrls: ['./catalogo.component.css']
})
export class CatalogoComponent implements OnInit {

  productos: Array<Producto> = [];

  indexPag: number = 1;
  ultimaPag: number = 1;

  constructor(
    private _productoService: ProductosService,
    private _carritoService: CarritoService
  ) { }

  async ngOnInit(){
    await this._productoService.traerProductos(0);
    this.getProductos();
  }

  async getProductos(){

    this.productos = await this._productoService.getProductos;
    this.ultimaPag = this._productoService.getUltimaPag;

    console.log('prodgertg',this.ultimaPag);
  }

  paginacion( index: number, inc: number ) {
    
    this.indexPag += inc;
    console.log('LLEGUE2', this.indexPag);
    this._productoService.traerProductos(index-1);
    this.productos = this._productoService.getProductos;
    this.ultimaPag = this._productoService.getUltimaPag;
  }

  addCart(item: Producto) {
   this._carritoService.agregarCarrito(item);
  };

}
