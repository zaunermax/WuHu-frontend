import { Injectable } from '@angular/core';
import {Observable} from "rxjs/Observable";
import { AuthHttp } from "angular2-jwt";
import { MatchPlan } from "../models/matchplan.model";
import { Weekday } from "../models/weekday.model";

@Injectable()
export class WeekDayService {
  constructor(private http: AuthHttp) {}

  getAll(): Observable<Weekday[]> {
    return this.http.get('/weekDay').map(res => <Weekday[]>res.json());
  }

  getById(id: number) : Observable<Weekday> {
    return this.http.get('/weekDay/' + id).map(res => <Weekday>res.json());
  }
}
