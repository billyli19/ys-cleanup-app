// Define a User class to represent user data.
export class User {
    id!: number;          // Unique identifier for the user.
    name!: string;        // User's full name.
    email!: string;       // User's email address.
    password!: string;    // User's password (usually hashed for security).
    score: number;        // User's overall score or points earned.
    trashBags: number;    // Number of trash bags collected or similar environmental contribution.
}
