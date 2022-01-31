import { Tema } from './../model/Tema';
import { environment } from './../../environments/environment.prod';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class TemaService {

  constructor(private http: HttpClient) { }

  token = {
    headers: new HttpHeaders().set('Authorization', environment.token)
  }

  getAllTema(): Observable<Tema[]>{
    return this.http.get<Tema[]>('https://segurancareal.herokuapp.com/temas', this.token)
  }
<<<<<<< HEAD
  getByIdTema(id: number): Observable<Tema> {
=======


  getByIdTema(id: number): Observable<Tema>{

>>>>>>> 7dec26e007e9c39bd3c275b68e401b73e50a0914
    return this.http.get<Tema>(`https://segurancareal.herokuapp.com/temas/${id}`, this.token)
  }

  postTema(tema: Tema): Observable<Tema>{
    return this.http.post<Tema>('https://segurancareal.herokuapp.com/temas', tema, this.token)
<<<<<<< HEAD
  }

  putTema(tema: Tema): Observable<Tema> {
    return this.http.put<Tema>('https://segurancareal.herokuapp.com/temas', tema, this.token)
  }

  deleteTema(id: number) {
    return this.http.delete(`https://segurancareal.herokuapp.com/temas/${id}`, this.token)
=======

  }

  putTema(tema: Tema): Observable<Tema>{
    return this.http.put<Tema>('https://segurancareal.herokuapp.com/temas', tema, this.token)
  }

  deleteTema(id:number){
    return this.http.delete<Tema>(`https://segurancareal.herokuapp.com/temas/${id}`, this.token)

>>>>>>> 7dec26e007e9c39bd3c275b68e401b73e50a0914
  }

}
