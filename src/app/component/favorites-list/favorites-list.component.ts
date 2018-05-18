import { Component, OnInit } from '@angular/core';
import {ArticlesService} from '../../service/articles.service';

@Component({
  selector: 'app-favorites-list',
  templateUrl: './favorites-list.component.html',
  styleUrls: ['./favorites-list.component.css']
})
export class FavoritesListComponent implements OnInit {

  public let; favorites = [];

  constructor(private articleService: ArticlesService) { }

  ngOnInit() {
    this.favorites = this.articleService.getFavorites();
    console.log(this.favorites);
  }

  deleteFavorite(article) {
    this.articleService.deleteFavorite(article);
  }

}
