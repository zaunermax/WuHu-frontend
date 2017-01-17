import { User } from "./user.model";
import { MatchPlan } from "./matchplan.model";

export class Team{
  constructor(public id:number = -1,
              public playerA : User = new User(),
              public playerB: User = new User(),
              public matchPlan: MatchPlan = new MatchPlan()) {}
}
