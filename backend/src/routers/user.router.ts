import { Router } from 'express';
import { sample_users } from '../mockData';
import jwt from 'jsonwebtoken';
import { UserModel } from '../models/user.model';
import asyncHandler from 'express-async-handler';

const router = Router();

router.get("/seed", asyncHandler(
    async(req, res) => {
        const userCount = await UserModel.countDocuments();
        if(userCount > 0) {
            res.send("Seed is already done!");
            return;
        }

        await UserModel.create(sample_users);
        res.send("Seed is done");
    }
))

router.post("/signin", (req, res) => {
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

export default router;