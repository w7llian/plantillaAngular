import { Component, OnInit } from '@angular/core';
import { Producto } from 'src/app/interfaces/producto';
import { CarritoService } from 'src/app/services/carrito.service';
import SwiperCore, { Pagination, Navigation } from "swiper";

SwiperCore.use([Pagination, Navigation]);

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {

  constructor(
    private _carritoService: CarritoService
  ) { }

  ngOnInit(): void {
  }

  addCart(item: Producto) {
    // this._servicioProductos.dispachProductos.emit({
    //   data: item,
    // });
   // this._notifications.create('Producto Añadido', item.title, this.conf_noti.type, this.conf_noti);

   this._carritoService.agregarCarrito(item);
  };

}
