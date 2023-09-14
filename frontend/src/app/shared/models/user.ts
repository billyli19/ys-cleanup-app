import { Leaderboard } from "./Leaderboard";
import { Organisation } from "./Organisation";

export class User {
    id!: number;
    name!: string;
    email!: string;
    password!: string;
    organisation!: Organisation;
    leaderboard!: Leaderboard;
}