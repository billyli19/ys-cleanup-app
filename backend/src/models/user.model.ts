import { Schema, model } from 'mongoose'
import { Leaderboard } from './leaderboard.model';
import { Organisation } from './organisation.model';

export interface User {
    id: string;
    name: string;
    email: string;
    password: string;
    organisation: Organisation;
    leaderboard: Leaderboard;
}

export const UserSchema = new Schema<User>(
    {
        name: { type: String, required: true },
        email: { type: String, required: true },
        password: {type: String, required: true}
    }, {
        toJSON: {
            virtuals: true
        },
        toObject: {
            virtuals: true
        },
        timestamps: true
    }
);

export const UserModel = model<User>('user', UserSchema);