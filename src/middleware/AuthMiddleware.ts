import { Request, Response,NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import {DB} from '../controllers/Database';

export const cekLog = async (req:Request, res : Response, next:NextFunction)  => {
    try {
        const token = req.header('Authorization');
        if (!token) return res.status(400).json({ message: "Invalid Auth" });
        const decoded:any = jwt.verify(token, String(process.env.ACCESS_TOKEN));
        if(!decoded) return res.status(400).json({error : "Invalid Auth"});
        const user = await DB.Models.User.findOne({_id: decoded.id}).select('-password')
        res.locals.payload = user;
        return next();
    } catch (err) {
        return res.status(500).json({ error: err.message });
    }
}
export const cekAdmin = async (req:Request, res : Response, next:NextFunction)  => {
    try {
        if(res.locals.payload.role) {
            return next();
        }
        return res.status(400).json({error : `Access Dinied`});
    } catch (err) {
        return res.status(500).json({ error: err.message });
    }
}