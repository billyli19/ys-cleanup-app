// Import necessary modules from the 'mongoose' library.
import { Schema, model } from 'mongoose';

// Define an interface 'User' to represent the structure of a user document.
export interface User {
    name: string;          // User's full name.
    email: string;         // User's email address.
    password: string;      // User's hashed password.
    organisation: string;  // User's organization or affiliation.
    rank: number;          // User's rank (optional).
    score: number;         // User's score or points (optional).
    trashBags: number;     // Number of trash bags collected (optional).
}

// Define a 'UserSchema' using the 'Schema' constructor for MongoDB.
export const UserSchema = new Schema<User>(
    {
        name: { type: String, required: true },         // Name field is required.
        email: { type: String, required: true },        // Email field is required.
        password: { type: String, required: true },     // Password field is required.
        organisation: { type: String, required: true }, // Organisation field is required.
        rank: { type: Number, required: false },         // Rank is optional.
        score: { type: Number, required: false },        // Score is optional.
        trashBags: { type: Number, required: false }    // Trash bags count is optional.
    }, {
        // Define additional configuration options for the schema.
        toJSON: {
            virtuals: true // Include virtual properties when converting to JSON.
        },
        toObject: {
            virtuals: true // Include virtual properties when converting to plain objects.
        },
        timestamps: true // Automatically add 'createdAt' and 'updatedAt' timestamps.
    }
);

// Create a user model using the 'model' constructor, specifying the document type 'User'.
export const UserModel = model<User>('user', UserSchema);
