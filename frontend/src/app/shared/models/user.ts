import { Leaderboard } from "./leaderboard";
import { Organisation } from "./organisation";

export class User {
    id!: number;
    name!: string;
    email!: string;
    password!: string;
    organisation!: Organisation;
    leaderboard!: Leaderboard;
}