import { Request, Response } from "express";
import Auth from "../utils/Auth";
import { DB } from "./Database";

class AuthController {
    
     async register (req:Request, res:Response):Promise<Response>{
        try {
            const {name, email, password} = req.body;
            const user = await DB.Models.User.findOne({email});
            if(user) return res.status(400).json({message : `Email already exists`});
            const hashing = await Auth.hashPassword(password, 12);
            const newUser =  await new DB.Models.User({name,email,password : hashing});
            newUser.save();
            return res.status(400).json({ message: "Regiseter success" });
        } catch (err) {
            return res.status(500).json({error : err.message});
        }
    }


}

export default new AuthController();