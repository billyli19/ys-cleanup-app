import { Schema, model } from 'mongoose'

export interface User {
    name: string;
    email: string;
    password: string;
    organisation: string;
    rank: number;
    score: number;
    trashBags: number
}

export const UserSchema = new Schema<User>(
    {
        name: { type: String, required: true },
        email: { type: String, required: true },
        password: {type: String, required: true},
        organisation: { type: String, required: true },
        rank: { type: Number , required: false },
        score: { type: Number, required: false},
        trashBags: { type: Number, required: false}
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