import { Injectable } from '@angular/core';
import { Observable } from "rxjs/Observable";
import { AuthHttp } from "angular2-jwt";
import { Role } from "../models/role.model";

@Injectable()
export class RoleService {
  constructor(private http: AuthHttp) {}

  getAll(): Observable<Role[]> {
    return this.http.get('/roles').map(res => <Role[]>res.json());
  }

  getById(id: number) : Observable<Role> {
    return this.http.get('/roles/' + id).map(res => <Role>res.json());
  }
}
