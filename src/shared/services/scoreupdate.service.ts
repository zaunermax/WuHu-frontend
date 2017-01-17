import { Injectable } from '@angular/core';
import {Observable} from "rxjs/Observable";
import { AuthHttp } from "angular2-jwt";
import { MatchPlan } from "../models/matchplan.model";
import { ScoreUpdate } from "../models/scoreupdate.model";

@Injectable()
export class ScoreUpdateService {
  constructor(private http: AuthHttp) {}

  getAll(): Observable<ScoreUpdate[]> {
    return this.http.get('/scoreUpdates').map(res => <ScoreUpdate[]>res.json());
  }

  getForMatch(matchId: number) : Observable<ScoreUpdate[]> {
    return this.http.get('/scoreUpdates/updates/' + matchId).map(res => <ScoreUpdate[]>res.json());
  }

  getResultOfMatch(matchId: number) : Observable<ScoreUpdate[]> {
    return this.http.get('/scoreUpdates/results/' + matchId).map(res => <ScoreUpdate[]>res.json());
  }

  getById(id: number) : Observable<ScoreUpdate> {
    return this.http.get('/scoreUpdates/' + id).map(res => <ScoreUpdate>res.json());
  }

  add(matchPlan: MatchPlan) : Observable<number> {
    return this.http.post('/scoreUpdates/', JSON.stringify(matchPlan)).map(res => <number>res.json());
  }

  update(matchPlan: MatchPlan) : Observable<boolean> {
    return this.http.put('/scoreUpdates/', JSON.stringify(matchPlan)).map(res => <boolean>res.json());
  }

  delete(matchId: number) : Observable<boolean> {
    return this.http.delete('/scoreUpdates/' + matchId).map(res => <boolean>res.json());
  }
}
