import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { HttpClientModule, HttpHeaders, HttpRequest, HttpResponse} from '@angular/common/http';
import 'rxjs/add/operator/map';
import { Observable} from 'rxjs/Observable';
import { Article} from '../model/article';
import { GlobalService} from './global.service';

@Injectable()
export class ArticlesService {

  public url: string;
  public favorites: Article[];

  constructor(
    public _http: Http,
    public _url: GlobalService
  ) {
    this.favorites = [];
    this.url = _url.getUrl();
  }

  getArticles() {

    return this._http.get(this.url).map(res => res.json());
  }

  getArticle(id) {
    console.log(id);
    return this._http.get(this.url).map(res => res.json());
  }

  getFavorites() {
    if (localStorage.getItem('favorites') == null) {
      this.favorites = [];
    } else {
      this.favorites = JSON.parse(localStorage.getItem('favorites'));
    }

    return this.favorites;
  }

  saveFavorite(favorito: Article) {
    this.favorites.unshift(favorito);
    let favorites  = [];
    if (localStorage.getItem('favorites') == null) {
      favorites = [];
      favorites.unshift(favorito);
      localStorage.setItem('favorites', JSON.stringify(favorites));
    } else {
      favorites = JSON.parse(localStorage.getItem('favorites'));
      favorites.unshift(favorito);
      localStorage.setItem('favorites', JSON.stringify(favorites));
    }
  }

  deleteFavorite(favorite: Article) {
    for (let i = 0; this.favorites.length; i++) {
      if (favorite == this.favorites[i]) {
        this.favorites.splice(i, 1 ) ;
        localStorage.setItem('favorites', JSON.stringify(this.favorites));
        return this.favorites;
      }
    }
  }

}
