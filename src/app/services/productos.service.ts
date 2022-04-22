import { Injectable } from '@angular/core';
import { Producto } from '../interfaces/producto';
import { HttpClient }from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  productos: Array<Producto> = [];
  ultimaPag: number = 0;

  constructor(
    private http: HttpClient,
  ) {}

  async traerProductos ( page: number){

    this.productos = [];
    let form = {
      name: "WEB_GETPRODUCTOS",
      parameters: {
        page: page
      }
    }
    // const prod =this.http.post<any>(`${environment.apiNode}`, form)
    //             .subscribe(async res => {
                  
    //               await res[0].forEach((element: {ItemName: any, LastPurPrc: any}) => {
                    
    //                 this.productos.push({
    //                   nombre: element.ItemName,
    //                   precio: element.LastPurPrc,
    //                   descripcion: element.ItemName,
    //                   img: "assets/medicamento.jpg"
    //                 });

    //               });

    //               let totalProductos = res[0][0].total;
    //               totalProductos = Math.round(totalProductos/12);
    //               console.log('antes',totalProductos);
    //               this.ultimaPag = totalProductos;
    //               // console.log(res[0]);

    //               console.log('gergerg',this.ultimaPag);

    //               return this.productos;
    //             });
    await this.http.post(`${environment.apiNode}`, form).toPromise().then( (resp) => {
        let res = Object.values(resp!);
        console.log('PROMESA',res[0]);
        res[0].forEach((element: {ItemName: any, LastPurPrc: any}) => {
                    
          this.productos.push({
            nombre: element.ItemName,
            precio: element.LastPurPrc,
            descripcion: element.ItemName,
            img: "assets/medicamento.jpg"
          });

        });

        let totalProductos = res[0][0].total;
        totalProductos = Math.round(totalProductos/12);
        this.ultimaPag = totalProductos+1;
    });

  }

  get getProductos(){
    return this.productos;
  }

  get getUltimaPag(){
    return this.ultimaPag;
  }
}
