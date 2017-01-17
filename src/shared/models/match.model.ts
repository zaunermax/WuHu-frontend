import { Team } from "./team.model";

export class Match {
  constructor( public id: number = -1,
               public teamA: Team = new Team(),
               public teamB: Team = new Team(),
               public dateTime: string = "",
               public showCounter: boolean = false,
               public finished: boolean = false) {}
}
