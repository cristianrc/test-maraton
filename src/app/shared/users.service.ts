import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import {map} from "rxjs";
import {User} from "./users.model";

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  api_users_url = 'https://jsonplaceholder.typicode.com/users';

  constructor(
    private http: HttpClient
  ) { }

  getUsers() {
    return this.http.get(this.api_users_url)
      .pipe(map((res: any) => res.map((user: any) => new User(user))));
  }
}
