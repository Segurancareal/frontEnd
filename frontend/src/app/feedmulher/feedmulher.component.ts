import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { Postagem } from '../model/Postagem';
import { Tema } from '../model/Tema';
import { Usuario } from '../model/Usuario';
import { AlertasService } from '../service/alertas.service';
import { AuthService } from '../service/auth.service';
import { PostagemService } from '../service/postagem.service';
import { TemaService } from '../service/tema.service';

@Component({
  selector: 'app-feedmulher',
  templateUrl: './feedmulher.component.html',
  styleUrls: ['./feedmulher.component.css']
})
export class FeedmulherComponent implements OnInit {

  postagem: Postagem = new Postagem()
  listaPostagens: Postagem[]

  //Pesquisa postagem
  tituloPost: string
  descricaoTema: string

  tema: Tema = new Tema()
  listaTemas: Tema[]
  idTema: number  

  user: Usuario = new Usuario()
  idUser = environment.id

  //Pesquisa postagem

  //id para o user.edit
  id = environment.id

  //Dados usuario do card
  nome = environment.nome
  foto = environment.foto

  click: number

  //ordena as postagens
  key = 'data'
  reverse = true

  constructor(
    private router: Router,
    private temaService: TemaService,
    public authService: AuthService,
    private postagemService: PostagemService,
    private alertas: AlertasService
  ) { }

  ngOnInit() {
    window.scroll(0, 0)

    if (environment.token == '') {
      this.router.navigate(['/login'])
    }

    this.temaService.refreshToken()
    this.postagemService.refreshToken()
    this.authService.refreshToken()
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

    if(this.postagem.foto == '' || this.postagem.foto == null) {
      this.postagem.foto = 'vazio'
    }

    this.postagemService.postPostagem(this.postagem).subscribe((resp: Postagem) => {
      this.postagem = resp
      this.alertas.showAlertSuccess('Postagem Realizada com sucesso!')
      this.postagem = new Postagem()
      this.getAllPostagens()
      
    })

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

  findByDescricaoTema(){
    if(this.descricaoTema == ''){
      this.getAllTemas()
    } else {
      this.temaService.getByDescricaoTema(this.descricaoTema).subscribe((resp: Tema[])=>{
        this.listaTemas = resp
      })
    }
  }


}