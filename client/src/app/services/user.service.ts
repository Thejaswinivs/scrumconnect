import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';

import { GeneralModel } from '../models/general-model';
import 'rxjs/add/operator/map'
import 'rxjs/Rx';

@Injectable()
export class UserService {

  private base_url: string = 'http://localhost:3000/api';
  private msg: string;

  constructor(private _http: Http) { }

  getUsers() {
    let url: string = this.base_url + '/users';
    return this._http.get(url)
      .map(res => res.json())
  }

  //Add User
  adduser(user: GeneralModel.User) {
    let headers: Headers = new Headers();
    let url: string = this.base_url + '/adduser';
    headers.append('content-type', 'application/json');
    return this._http.post(url, user, {headers: headers} )
    .map(res => res.json());
  }

  getCountryDetails() {
    let url = "https://restcountries.eu/rest/v1/region/Europe";

    return this._http.get(url)
    .map(res => res.json().map(obj => obj.name));
  }

  set setMessage(msg: string) {
    this.msg = msg;
  }
  get getMessage() {
    return this.msg;
  }
}
