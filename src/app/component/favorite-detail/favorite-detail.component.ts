import { Component, OnInit } from '@angular/core';
import {ArticlesService} from '../../service/articles.service';
import {Article} from '../../model/article';
import {ActivatedRoute, Params, Router} from '@angular/router';

@Component({
  selector: 'app-favorite-detail',
  templateUrl: './favorite-detail.component.html',
  styleUrls: ['./favorite-detail.component.css'],
  providers: [ArticlesService]
})
export class FavoriteDetailComponent implements OnInit {

  public article: Article;
  public favorite: Article;
  public let; favorites = [];

  constructor(

    private articlesService: ArticlesService,
    private _route: ActivatedRoute,
    private _router: Router
  ) { }

  ngOnInit() {

    console.log('producto-detail.Component.ts cargado...');
    this.favorites = this.articlesService.getFavorites();
    console.log(this.favorites);
    this._route.params.forEach((params: Params) => {

      const id = params['id'];

      this.articlesService.getArticle(id).subscribe(

        result => {
          // se retornan el articulo desde api-news
          this.article = result.articles[id];
          this.favorite = this.favorites[id];
          console.log(result.articles);
          console.log(this.favorites[id]);
        }
      );

    });
  }

}
