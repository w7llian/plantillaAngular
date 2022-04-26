import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/interfaces/usuario';
import { UsuariosService } from 'src/app/services/usuarios.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  usuarioActual!: Usuario;
  user: string = "";
  password: string = "";

  constructor(
    private _usuariosService: UsuariosService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  async login(){
    let usuario1 = await this._usuariosService.login(this.user,this.password);
    console.log('usuarioprueba',usuario1);
    if( usuario1 ){
      this.usuarioActual = usuario1;
      localStorage.setItem('usuario',JSON.stringify(usuario1));
      let routerLink = '/pedido';
      this.router.navigate([routerLink]);
    }
  }

}
