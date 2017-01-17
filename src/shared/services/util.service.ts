import { Injectable } from '@angular/core';
import {Observable} from "rxjs/Observable";
import { AuthHttp } from "angular2-jwt";
import { MatchPlan } from "../models/matchplan.model";
import { ScoreUpdate } from "../models/scoreupdate.model";
import { Team } from "../models/team.model";
import { Weekday } from "../models/weekday.model";
import { User } from "../models/user.model";

@Injectable()
export class UtilService {
  constructor(private http: AuthHttp) {}

  getUsersFromMatchPlan(matchPlanId: number): Observable<User[]> {
    return this.http.get('/util/getUsersFromMatchPlan/' + matchPlanId).map(res => <User[]>res.json());
  }

  addUserToMatchPlan(matchPlanId: number, userId: number) : Observable<boolean> {
    return this.http.put('/util/addUserToMatchPlan/' + matchPlanId + '/' + userId, '').map(res => <boolean>res.json());
  }

  removeUserFromMatchPlan(matchPlanId: number, userId: number) : Observable<boolean> {
    return this.http.delete('/util/removeUserFromMatchPlan/' + matchPlanId + '/' + userId).map(res => <boolean>res.json());
  }

  addAvailableDayToUser(weekDayId: number, userId: number): Observable<boolean> {
    return this.http.put('/util/addAvailableDayToUser/' + weekDayId + '/' + userId, '').map(res => <boolean>res.json());
  }

  removeAvailableDayFromUser(weekDayId: number, userId: number): Observable<boolean> {
    return this.http.delete('/util/removeAvailableDayFromUser/' + weekDayId + '/' + userId).map(res => <boolean>res.json());
  }
}
