// Import necessary modules from the 'mongoose' library.
import { connect, ConnectOptions } from 'mongoose';

// Define a function to establish a connection to the MongoDB database.
export const dbConnect = () => {
    // Use the 'connect' function to connect to the MongoDB database using the provided URI.
    connect(process.env.MONGO_DB_URI!, {
        useNewUrlParser: true,         // Use the new URL parser.
        useUnifiedTopology: true       // Use the new Server Discovery and Monitoring engine.
    } as ConnectOptions).then(
        // If the connection is successful, log a success message.
        () => console.log("Connect successfully"),
        // If there is an error during the connection, log the error.
        (error) => console.log(error)
    );
}
