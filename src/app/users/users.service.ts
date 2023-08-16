import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private  users : HttpClient) { }

  getData() {
      return this.users;
  }
}
