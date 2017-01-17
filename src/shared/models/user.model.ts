import { Role } from "./role.model";

export class User {
  constructor ( public id: number = -1,
                public email: string = "",
                public password: string = "",
                public role: Role = new Role(),
                public firstName: string = "",
                public lastName: string = "",
                public shortName: string = "",
                public photoUrl: string = "",
                public elo: number = 1000) {}
}


