import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroComponent } from './cadastro/cadastro.component';
import { LoginComponent } from './login/login.component';
import { MenuComponent } from './menu/menu.component';
import { InicioComponent } from './inicio/inicio.component';
import { FeedComponent } from './feed/feed.component';
import { MenufeedComponent } from './menufeed/menufeed.component';
import { TemaComponent } from './tema/tema.component';

const routes: Routes = [
  {path:"",redirectTo:"inicio",pathMatch: "full"},
  {path:"login",component: LoginComponent},
  {path:"cadastro",component: CadastroComponent},
  {path:"menu",component:MenuComponent},
  {path:"inicio",component: InicioComponent},
  {path:"feed",component: FeedComponent},
  {path:"menufeed",component: MenufeedComponent},
  {path: "tema", component: TemaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
