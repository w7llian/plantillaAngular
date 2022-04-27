import { Component, OnInit } from '@angular/core';
import { Producto } from 'src/app/interfaces/producto';
import { Usuario } from 'src/app/interfaces/usuario';
import { UsuariosService } from 'src/app/services/usuarios.service';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {

  usuario!: Usuario;

  constructor(
    private _usuariosService: UsuariosService,
  ) {}

  ngOnInit(): void {
    this.usuario = {
      Nombre: "nombrec",
      Usuario: "usuarioc",
      Password: "passwordc",
      CodUsuario: 1
    }
    this.usuario = this._usuariosService.getUsuario();
    console.log('USUARIO',this.usuario);
  }

}
