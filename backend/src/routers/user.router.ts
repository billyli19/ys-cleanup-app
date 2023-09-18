import { Router } from 'express';
import jwt from 'jsonwebtoken';
import { User, UserModel } from '../models/user.model';
import asyncHandler from 'express-async-handler';
import { HTTP_BAD_REQUEST, HTTP_UNAUTHORIZED } from '../constants/http_status';
import bcrypt from 'bcryptjs';

const router = Router();

router.post("/signin", asyncHandler(
    async (req, res) => {
        const {email, password} = req.body;
        const user = await UserModel.findOne({email});

        if(user && (await bcrypt.compare(password, user.password))) {
            res.send(generateTokenResponse(user));
        } else {
            res.status(HTTP_BAD_REQUEST).send("email or password is not valid");
        }
    }
))

router.post("/register", asyncHandler(
    async(req, res) => {
        const { name, email, password, organisation } = req.body;
        const user = await UserModel.findOne({email});
        if(user) {
            res.status(HTTP_UNAUTHORIZED).send("email or password is not valid");
            return;
        }

        const encryptedPassword = await bcrypt.hash(password, 10);

        const newUser: User = {
            name,
            email: email.toLowerCase(),
            password: encryptedPassword,
            organisation,
            rank: 0,
            score: 0,
            trashBags: 0
        }
        const dbUser = await UserModel.create(newUser);

        res.send(generateTokenResponse(dbUser));
    }
))

const generateTokenResponse = (user: User) => {
    const token = jwt.sign({
        email: user.email,
    }, process.env.JWT_SECRET!, {
        expiresIn:"7d"
    });

    return {
        name: user.name,
        email: user.email
    }
}

export default router;