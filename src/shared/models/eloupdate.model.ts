import { User } from "./user.model";

export class ELOUpdate {
  constructor(public id: number = -1,
              public user: User = new User(),
              public scoreOld: number = 0,
              public scoreNew: number = 0,
              public dateTime: string = "") {}
}
