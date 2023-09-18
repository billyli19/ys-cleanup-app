// Import necessary modules and configure environment variables using dotenv.
import dotenv from 'dotenv'; 
dotenv.config();

// Import Express and other required modules.
import express from "express";
import cors from 'cors'; // Enable Cross-Origin Resource Sharing (CORS) middleware.
import userRouter from './routers/user.router'; // Import user-related routes.
import { dbConnect } from './configs/database.config'; // Connect to the database using a configuration.
dbConnect(); // Establish a connection to the MongoDB database.

// Create an Express application instance.
const app = express();

// Configure the Express app to parse JSON data in requests.
app.use(express.json());

// Configure CORS settings to allow requests from specific origins.
app.use(cors({
    credentials: true,
    origin: ["http://localhost:4200"] // Allow requests from http://localhost:4200.
}));

// Mount user-related routes under the "/api/users" path.
app.use("/api/users", userRouter);

// Define the port on which the server will listen.
const port = 8080;

// Start the Express server and listen on the specified port.
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
