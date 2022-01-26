import { devOnlyGuardedExpression } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-menufeed',
  templateUrl: './menufeed.component.html',
  styleUrls: ['./menufeed.component.css']
})
export class MenufeedComponent implements OnInit {

  foto = environment.foto;
  nome = environment.nome

  constructor(private router : Router) { }

  ngOnInit() {
   window.scroll(0,0)
  }

  deslogar(){
    environment.foto=""
    environment.id=0
    environment.token=""
    environment.nome=""
    this.router.navigate(["/inicio"])
  }

}

