import { Injectable } from '@angular/core';
import {Observable} from "rxjs/Observable";
import { AuthHttp } from "angular2-jwt";

@Injectable()
export class LockService {
  constructor(private http: AuthHttp) {}

  getLockStatus() : Observable<boolean> {
    return this.http.get('/lock').map(res => <boolean>res.json());
  }

  setLock() : Observable<string> {
    return this.http.put('/lock', '').map(res => <string>res.json());
  }

  releaseLock(unlockKey: string) : Observable<boolean> {
    return this.http.delete('/lock/' + unlockKey).map(res => <boolean>res.json());
  }
}
