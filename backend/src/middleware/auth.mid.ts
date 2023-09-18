// Import necessary modules and constants.
import { verify } from 'jsonwebtoken';          // Import the 'verify' function from the 'jsonwebtoken' library for token verification.
import { HTTP_UNAUTHORIZED } from '../constants/http_status'; // Import the HTTP_UNAUTHORIZED status code constant.

// Define and export a middleware function for JWT token authentication.
export default (req: any, res: any, next: any) => {
    const token = req.headers.access_token as string; // Extract the JWT token from the request headers.
    
    // If no token is provided, return an HTTP 401 Unauthorized response.
    if (!token) return res.status(HTTP_UNAUTHORIZED).send();

    try {
        // Attempt to decode and verify the token using the JWT_SECRET from environment variables.
        const decodedUser = verify(token, process.env.JWT_SECRET!);

        // Attach the decoded user information to the request object for use in subsequent middleware or routes.
        req.user = decodedUser;
    } catch (error) {
        // If token verification fails (e.g., expired or invalid token), return an HTTP 401 Unauthorized response.
        res.status(HTTP_UNAUTHORIZED).send();
    }

    // Continue to the next middleware or route in the request processing chain.
    return next();
}
