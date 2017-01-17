import { Injectable } from '@angular/core';
import {Observable} from "rxjs/Observable";
import { AuthHttp } from "angular2-jwt";
import { MatchPlan } from "../models/matchplan.model";
import { ScoreUpdate } from "../models/scoreupdate.model";
import { Team } from "../models/team.model";

@Injectable()
export class TeamService {
  constructor(private http: AuthHttp) {}

  getAll(): Observable<Team[]> {
    return this.http.get('/teams').map(res => <Team[]>res.json());
  }

  getById(id: number) : Observable<Team> {
    return this.http.get('/teams/' + id).map(res => <Team>res.json());
  }

  add(team: Team) : Observable<number> {
    return this.http.post('/teams/', JSON.stringify(team)).map(res => <number>res.json());
  }

  update(team: Team) : Observable<boolean> {
    return this.http.put('/teams/', JSON.stringify(team)).map(res => <boolean>res.json());
  }

  delete(teamId: number) : Observable<boolean> {
    return this.http.delete('/teams/' + teamId).map(res => <boolean>res.json());
  }
}
