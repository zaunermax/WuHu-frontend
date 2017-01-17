
import { Match } from "./match.model";

export class ScoreUpdate {
  constructor(public id: number = -1,
              public match: Match = new Match(),
              public dateTime: string = "",
              public scoreA: number = 0,
              public scoreB: number = 0) {}
}
