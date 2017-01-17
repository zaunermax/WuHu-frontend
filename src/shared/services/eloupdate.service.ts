import { Injectable } from '@angular/core';
import {Observable} from "rxjs/Observable";
import { AuthHttp } from "angular2-jwt";
import { ELOUpdate } from "../models/eloupdate.model";

@Injectable()
export class ELOUpdateService {
  constructor(private http: AuthHttp) {}

  getForUserId(userId: number) : Observable<ELOUpdate> {
    return this.http.get('/elo/' + userId).map(res => <ELOUpdate>res.json());
  }
}
