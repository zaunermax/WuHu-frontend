import { Injectable } from '@angular/core';
import {Observable} from "rxjs/Observable";
import { AuthHttp } from "angular2-jwt";
import { MatchPlan } from "../models/matchplan.model";
import { ScoreUpdate } from "../models/scoreupdate.model";
import { Team } from "../models/team.model";
import { Weekday } from "../models/weekday.model";
import { User } from "../models/user.model";

@Injectable()
export class UserService {
  constructor(private http: AuthHttp) {}

  getAll(): Observable<User[]> {
    return this.http.get('/users').map(res => <User[]>res.json());
  }

  getById(id: number) : Observable<User> {
    return this.http.get('/users/' + id).map(res => <User>res.json());
  }

  getByEmail(email: string) : Observable<User> {
    return this.http.get('/users/' + email).map(res => <User>res.json());
  }

  getAvailable(weekdays: Weekday[]): Observable<User[]> {
    return this.http.post('/users/available', JSON.stringify(weekdays)).map(res => <User[]>res.json());
  }

  getCurrentRanking(): Observable<User[]> {
    return this.http.get('/users/ranking/top').map(res => <User[]>res.json());
  }

  getCurrentRankingById(id: number) : Observable<User> {
    return this.http.get('/users/ranking/' + id).map(res => <User>res.json());
  }

  add(user: User) : Observable<number> {
    return this.http.post('/users/', JSON.stringify(user)).map(res => <number>res.json());
  }

  update(user: User) : Observable<boolean> {
    return this.http.put('/users/', JSON.stringify(user)).map(res => <boolean>res.json());
  }

  delete(userId: number) : Observable<boolean> {
    return this.http.delete('/users/' + userId).map(res => <boolean>res.json());
  }
}
