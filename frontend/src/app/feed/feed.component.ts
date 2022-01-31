import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { Postagem } from '../model/Postagem';
import { Tema } from '../model/Tema';
import { Usuario } from '../model/Usuario';
import { AuthService } from '../service/auth.service';
import { TemaService } from '../service/tema.service';
import { PostagemService } from '../service/postagem.service';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})
export class FeedComponent implements OnInit {

  postagem: Postagem = new Postagem()
  listaPostagens: Postagem[]

  //Pesquisa postagem
  tituloPost: string

  tema: Tema = new Tema()
  listaTemas: Tema[]
  idTema: number
  nomeTema: string

  user: Usuario = new Usuario()
  idUser = environment.id

  //Pesquisa postagem

  //id para o user.edit
  id = environment.id

  //Dados usuario do card
  nome = environment.nome
  foto = environment.foto

  //ordena as postagens
  key = 'data'
  reverse = true

  constructor(
    private router: Router,
    private temaService: TemaService,
    public authService: AuthService,
    private postagemService: PostagemService
  ) { }

  ngOnInit() {
    window.scroll(0, 0)

    if (environment.token == '') {
      this.router.navigate(['/login'])
    }

    this.getAllTemas()
    this.getAllPostagens()
  }

  //exibir todos os temas
  getAllTemas() {
    this.temaService.getAllTema().subscribe((resp: Tema[]) => {
      this.listaTemas = resp
    })
  }

  //buscar pelo id do tema
  findByIdTema() {
    this.temaService.getByIdTema(this.idTema).subscribe((resp: Tema) => {
      this.tema = resp
    })
  }

  getAllPostagens() {
    this.postagemService.getAllPostagens().subscribe((resp: Postagem[]) => {
      this.listaPostagens = resp
    })
  }

  findByIdUser() {
    this.authService.getByIdUser(this.idUser).subscribe((resp: Usuario) => {
      this.user = resp
    })
  }

  //metodo para publicar
  publicar() {
    this.tema.id = this.idTema
    this.postagem.tema = this.tema

    this.user.id = this.idUser
    this.postagem.usuario = this.user

  }


  //temas na pagina inicial
  findAllTemas() {
    this.temaService.getAllTema().subscribe((resp: Tema[]) => {
      this.listaTemas = resp
    })
  }

  //Pesquisa de publicacoes
  findByTituloPostagem() {
    if (this.tituloPost == '') {
      this.getAllPostagens()
    } else {
      this.postagemService.getByTituloPostagem(this.tituloPost).subscribe((resp: Postagem[]) => {
        this.listaPostagens = resp
      })
    }
  }

}