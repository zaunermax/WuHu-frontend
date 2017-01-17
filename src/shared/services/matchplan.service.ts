import { Injectable } from '@angular/core';
import {Observable} from "rxjs/Observable";
import { AuthHttp } from "angular2-jwt";
import { MatchPlan } from "../models/matchplan.model";

@Injectable()
export class MatchPlanService {
  constructor(private http: AuthHttp) {}

  getAll(): Observable<MatchPlan[]> {
    return this.http.get('/matchPlans').map(res => <MatchPlan[]>res.json());
  }

  getForUser(id: number) : Observable<MatchPlan[]> {
    return this.http.get('/matchPlans/fromUser/' + id).map(res => <MatchPlan[]>res.json());
  }

  getById(id: number) : Observable<MatchPlan> {
    return this.http.get('/matchPlans/' + id).map(res => <MatchPlan>res.json());
  }

  add(matchPlan: MatchPlan) : Observable<number> {
    return this.http.post('/matchPlans/', JSON.stringify(matchPlan)).map(res => <number>res.json());
  }

  update(matchPlan: MatchPlan) : Observable<boolean> {
    return this.http.put('/matchPlans/', JSON.stringify(matchPlan)).map(res => <boolean>res.json());
  }

  delete(matchId: number) : Observable<boolean> {
    return this.http.delete('/matchPlans/', matchId).map(res => <boolean>res.json());
  }
}
