import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-favorites-list',
  templateUrl: './favorites-list.component.html',
  styleUrls: ['./favorites-list.component.css']
})
export class FavoritesListComponent implements OnInit {

  public let; favorites = [];

  constructor() { }

  ngOnInit() {
    this.favorites = this.articleService
  }

}

export class FavoritosComponent implements OnInit {

  public let; favoritos = [];


  constructor(private objetoService: ObjetosService) { }

  ngOnInit() {
    this.favoritos = this.objetoService.getFavoritos();
    console.log(this.favoritos);
  }

  borrarFavorito(objeto) {
    this.objetoService.borrarFavorito(objeto);
  }

}
