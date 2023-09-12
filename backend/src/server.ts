import express from "express";
import cors from 'cors';
import { sample_users } from "./mockData";
import jwt from 'jsonwebtoken'

const app = express();

app.use(express.json());

app.use(cors({
    credentials:true,
    origin:["http://localhost:4200"]
}));

app.get("/api/register", (req, res) => {
    res.send('hello, world!')
})

app.post("/api/users/login", (req, res) => {
    const { email, password } = req.body;
    const user = sample_users.find(user => 
        user.email === email &&
        user.password === password);
    if(user) {
        res.send(generateTokenResponse(user));
    } else {
        res.status(400).send("email or password is not valid");
    }
})

const generateTokenResponse = (user: any) => {
    const token = jwt.sign({
        email:user.email
    }, "SomeRandomTest", {
        expiresIn:"7d"
    });

    user.token = token;
    return user;
}

const port = 5000;

app.listen(port, ()=> {
    console.log(`Server is running on http://localhost:${port}`);
})

