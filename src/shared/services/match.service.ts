import { Injectable } from '@angular/core';
import {Observable} from "rxjs/Observable";
import { Match } from "../models/match.model";
import { MatchGeneratorParams } from "../models/matchgeneratorparams.model";
import { AuthHttp } from "angular2-jwt";

@Injectable()
export class MatchService {
  constructor(private http: AuthHttp) {}

  getAll(): Observable<Match[]> {
    return this.http.get('/matches').map(res => <Match[]>res.json());
  }

  getByDate(date: string) : Observable<Match[]> {
    return this.http.get('/matches/date/' + date).map(res => <Match[]>res.json());
  }

  getTodays() : Observable<Match[]> {
    return this.http.get('/matches/today').map(res => <Match[]>res.json());
  }

  getByMatchPlan(matchPlanId: number) : Observable<Match[]> {
    return this.http.get('/matches/matchplan/' + matchPlanId).map(res => <Match[]>res.json());
  }

  getLatestMatchFromUser(userId: number) : Observable<Match> {
    return this.http.get('/matches/latest/user/' + userId).map(res => <Match>res.json());
  }

  getById(id: number) : Observable<Match> {
    return this.http.get('/matches/' + id).map(res => <Match>res.json());
  }

  add(match: Match) : Observable<number> {
    return this.http.post('/matches/', JSON.stringify(match)).map(res => <number>res.json());
  }

  update(match: Match) : Observable<boolean> {
    return this.http.put('/matches/', JSON.stringify(match)).map(res => <boolean>res.json());
  }

  delete(matchId: number) : Observable<boolean> {
    return this.http.delete('/matches/', matchId).map(res => <boolean>res.json());
  }

  generateMatches(matchGeneratorParams: MatchGeneratorParams) : Observable<Match[]> {
    return this.http.post('/matches/generate/', JSON.stringify(matchGeneratorParams)).map(res => <Match[]>res.json());
  }

}
