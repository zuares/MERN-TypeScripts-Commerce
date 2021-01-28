import { Request, Response } from "express";
import { verify } from "jsonwebtoken";
import Auth from "../utils/Auth";
import { DB } from "./Database";
import jwt from 'jsonwebtoken';

class AuthController {
     async register (req:Request, res:Response):Promise<Response>{
        try {
            const {name, email, password} = req.body;
            const user = await DB.Models.User.findOne({email});
            if(user) return res.status(400).json({error : `Email already exists`});
            const hashing = await Auth.hashPassword(password, 12);
            const newUser =  await new DB.Models.User({name,email,password : hashing});
            newUser.save();
            return res.status(400).json({ error: "Regiseter success" });
        } catch (err) {
            return res.status(500).json({error : err.message});
        }
    }
     async login (req:Request, res:Response):Promise<Response>{
        try {
            const {email, password} = req.body;
            const user = await DB.Models.User.findOne({email});
            if(!user) return res.status(400).json({error : `Email not registered`});
            const hashing = await Auth.comparePassword(password, user.password);
            if(! hashing )  return res.status(400).json({error : `Password incorect`});
            const accessToken = Auth.createAccesToken({id : user._id});
            const refreshToken = Auth.createRefreshToken({id : user._id});
            res.cookie('refreshToken', refreshToken, {httpOnly : true, path: '/api/v1/users/refresh_token'});
            return res.status(400).json({ message: "Login success", accessToken  });
        } catch (err) {
            return res.status(500).json({error : err.message});
        }
    }
    async refresh_token (req:Request, res:Response): Promise<Response> {
        try {
            const rf_token = req.cookies.refreshToken;
            let payload:any = jwt.verify(rf_token, String(process.env.REFRESH_TOKEN));
            const accessToken = await Auth.createAccesToken({id : payload.id});
            return res.status(400).json({payload, accessToken});
        } catch (err) {
            return res.status(500).json({error : err.message});
        }
    }

}

export default new AuthController();