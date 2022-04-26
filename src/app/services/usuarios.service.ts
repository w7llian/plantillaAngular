import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Usuario } from '../interfaces/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  usuarioPerson: Array<Usuario> = [];

  constructor(
    private http: HttpClient
  ) { }

  async login(usuario: string, password: string){

    let form = {
      name: "WEB_CONSULTA_LOGIN",
      parameters: {
        user: usuario,
        password: password
      }
    }

    await this.http.post(`${environment.apiNode}`, form).toPromise().then( (resp) => {
      let res = Object.values(resp!);
      this.usuarioPerson.push(res[0][0]);
  });

  return this.usuarioPerson[0];

  }
}
