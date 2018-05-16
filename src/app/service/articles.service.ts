import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { HttpClientModule, HttpHeaders, HttpRequest, HttpResponse} from '@angular/common/http';
import 'rxjs/add/operator/map';
import { Observable} from "rxjs/Observable";
import { Article} from "../model/article";
import { GlobalService} from "./global.service";

@Injectable()
export class ArticlesService {

  public url: string;

  constructor(
    public _http: Http,
    public _url: GlobalService
  ) {
    this.url = _url.getUrl();
  }

  getArticles(){

    return this._http.get(this.url).map(res => res.json());
  }

}
