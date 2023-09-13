import { Schema, model } from 'mongoose'

export interface Leaderboard {
    id: number;
    rank: number;
    points: number;
}

export const LeaderboardSchema = new Schema<Leaderboard>(
    {
        rank:{ type: Number },
        points:{ type: Number }
    }, {
        toJSON: {
            virtuals: true
        },
        toObject: {
            virtuals: true
        },
        timestamps: true
    }
)

export const LeaderboardModel = model<Leaderboard>('leaderboard', LeaderboardSchema);