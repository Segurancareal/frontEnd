import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { UsuarioLogin } from '../model/UsuarioLogin';
import { Usuario } from '../model/Usuario';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient
  ) { }

  token = {
    headers: new HttpHeaders().set("Authorization", environment.token)
  }

  refreshToken(){
    this.token = {
      headers: new HttpHeaders().set('Authorization', environment.token)
    }
  }

  entrar(userLogin: UsuarioLogin): Observable<UsuarioLogin>{
    return this.http.post<UsuarioLogin>('https://segurancareal.herokuapp.com/usuarios/logar', userLogin )
  }

  cadastrar(user: Usuario): Observable<Usuario>{
    return this.http.post<Usuario>('https://segurancareal.herokuapp.com/usuarios/cadastrar', user )
  }

  getByIdUser(id: number): Observable<Usuario>{
    return this.http.get<Usuario>(`https://segurancareal.herokuapp.com/usuarios/${id}`, this.token)
  }

  atualizar(usuario: Usuario): Observable<Usuario>{
    return this.http.put<Usuario>('https://segurancareal.herokuapp.com/usuarios/atualizar', usuario, this.token)
  }


  logado(){
    let ok: boolean = false;

    if(environment.token != ""){
      ok = true
    }

    return ok 
  }

  adm(){
    let ok: boolean = false;

    if(environment.tipo == "adm"){
      ok = true
    }

    return ok 
  }


}

