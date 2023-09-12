import { Organisation } from './organisation';
import { Leaderboard } from './leaderboard';

export class User {
    id!: number;
    name!: string;
    email!: string;
    password!: string;
    organisation!: Organisation;
    leaderboard!: Leaderboard;
}