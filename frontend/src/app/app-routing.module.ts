import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroComponent } from './cadastro/cadastro.component';
import { LoginComponent } from './login/login.component';
import { InicioComponent } from './inicio/inicio.component';
import { FeedComponent } from './feed/feed.component';
import { MenufeedComponent } from './menufeed/menufeed.component';
import { TemaEditComponent } from './edit/tema-edit/tema-edit.component';
import { TemaDeleteComponent } from './delete/tema-delete/tema-delete.component';
import { TemaComponent } from './tema/tema.component';
import { PostagemEditComponent } from './edit/postagem-edit/postagem-edit.component';
import { PostagemDeleteComponent } from './delete/postagem-delete/postagem-delete.component';
import { UsuarioEditComponent } from './edit/usuario-edit/usuario-edit.component';
import { MeuPerfilComponent } from './meu-perfil/meu-perfil.component';
import { FeedmulherComponent } from './feedmulher/feedmulher.component';

const routes: Routes = [
  {path:"",redirectTo:"inicio",pathMatch: "full"},
  {path:"login",component: LoginComponent},
  {path:"cadastro",component: CadastroComponent},
  {path:"inicio",component: InicioComponent},
  {path:"feed",component: FeedComponent},
  {path:"menufeed",component: MenufeedComponent},
  {path: "tema", component: TemaComponent},
  {path: "tema-edit/:id", component: TemaEditComponent},
  {path: "tema-delete/:id", component: TemaDeleteComponent},
  
  {path: "postagem-edit/:id", component: PostagemEditComponent},
  {path: "postagem-delete/:id", component: PostagemDeleteComponent},
  {path: "usuario-edit/:id", component: UsuarioEditComponent},
  {path: "meu-perfil", component: MeuPerfilComponent},
  {path: "feedmulher", component: FeedmulherComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
