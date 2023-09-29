// Import necessary modules and constants.
import { Router } from 'express';
import jwt from 'jsonwebtoken';
import { User, UserModel } from '../models/user.model';
import asyncHandler from 'express-async-handler';
import {HTTP_OK_REQUEST, HTTP_BAD_REQUEST, HTTP_UNAUTHORIZED } from '../constants/http_status';
import bcrypt from 'bcryptjs';

// Create an Express Router instance.
const router = Router();

// Define a route for user sign-in.
router.post("/signin", asyncHandler(
    async (req, res) => {
        // Extract email and password from the request body.
        const { email, password } = req.body;
        
        // Find a user with the provided email in the database.
        const user = await UserModel.findOne({ email });

        // Check if the user exists and the provided password is correct.
        if (user && (await bcrypt.compare(password, user.password))) {
            // Send a response with a token for successful sign-in.
            res.send(generateTokenResponse(user));
        } else {
            // Send an HTTP 400 Bad Request response for invalid credentials.
            res.status(HTTP_BAD_REQUEST).send("Email or password is not valid");
        }
    }
));

// Define a route for user registration.
router.post("/register", asyncHandler(
    async (req, res) => {
        // Extract user registration data from the request body.
        const { name, email, password } = req.body;

        // Check if a user with the provided email already exists.
        const user = await UserModel.findOne({ email });

        if (user) {
            // Send an HTTP 401 Unauthorized response if the email is already in use.
            res.status(HTTP_UNAUTHORIZED).send("Email or password is not valid");
            return;
        }

        // Encrypt the user's password before storing it in the database.
        const encryptedPassword = await bcrypt.hash(password, 10);

        // Create a new user document with the provided data.
        const newUser: User = {
            name,
            email: email.toLowerCase(),
            password: encryptedPassword,
            score: 0,
            trashBags: 0
        }

        // Store the new user document in the database.
        const dbUser = await UserModel.create(newUser);

        // Send a response with a token for successful registration.
        res.send(generateTokenResponse(dbUser));
    }
));

//submit amount of trash bags collected.

router.post("/submitTrash", asyncHandler(
    async (req, res) => {
        // Extract amount of trashbags and user.
        const { email, trashbags } = req.body;

        //Find user in DB;
        const user = await UserModel.findOne({ email });

        // Check if the user exists
        if (user) {
            //Update trash bags for User in database
            const filter = { email: email };
            const update = { trashBags: user.trashBags + trashbags };

            // Update trash bags
            await UserModel.findOneAndUpdate(filter, update);

            // Send a response that update was successful!
            res.status(HTTP_OK_REQUEST).send("Trashbags have been updated!");
        } else {
            // Send an HTTP 400 Bad Request response for invalid credentials.
            res.status(HTTP_BAD_REQUEST).send("Something went wrong!");
        }
    }
));


//Get all users, only name and trash bags fields included
router.get("/users", asyncHandler(
    async (req, res) => {
        //Find allUsers in DB;
        const users = await UserModel.find({}).select('name trashBags');;

        // Check if the users are returned
        if (users) {
            //Send list of users back
            res.status(HTTP_OK_REQUEST).send(users);
        } else {
            // Send an HTTP 400 Bad Request response for invalid credentials.
            res.status(HTTP_BAD_REQUEST).send("Something went wrong!");
        }
    }
));

// Define a function to generate a JSON Web Token (JWT) response.
const generateTokenResponse = (user: User) => {
    // Create a JWT token containing the user's email and set it to expire in 7 days.
    const token = jwt.sign({
        email: user.email,
    }, process.env.JWT_SECRET!, {
        expiresIn: "7d"
    });

    // Return user information with the generated token.
    return {
        name: user.name,
        email: user.email
    }
}

// Export the router for use in other parts of the application.
export default router;
