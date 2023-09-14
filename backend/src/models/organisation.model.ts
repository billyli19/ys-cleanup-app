import { Schema, model } from 'mongoose'

export interface Organisation {
    id: string;
    name: string
}

export const OrganisationSchema = new Schema<Organisation>(
    {
        name: { type: String}
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

export const OrganisationModel = model<Organisation>('organisation', OrganisationSchema);