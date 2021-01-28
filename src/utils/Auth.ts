import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

export default class Auth {

    public static async hashPassword(password: string, rounds:number):Promise<string>{
        return await bcrypt.hash(password, rounds);
    }


    public static async comparePassword(password: string,dbHash:string):Promise<Boolean>{
        return await bcrypt.compare(password, dbHash);
    }
    public static createAccesToken(user:string | object):string {
        return jwt.sign(user, String(process.env.ACCESS_TOKEN), {expiresIn : '1d'});
    }

    public static createRefreshToken(user:string | object):string {
        return jwt.sign(user, String(process.env.REFRESH_TOKEN), {expiresIn : '7d'});
    }
    
}