import bcrypt from 'bcrypt';

export default class Auth {

    public static async hashPassword(password: string, rounds:number):Promise<string>{
        return await bcrypt.hash(password, rounds);
    }

    public static async comparePassword(password: string,dbHash:string):Promise<Boolean>{
        return await bcrypt.compare(password, dbHash);
    }
}