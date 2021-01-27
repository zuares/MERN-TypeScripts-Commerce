import { Schema, model, Document, Model } from 'mongoose';

declare interface IUser extends Document{
    name: string;
    email: string;
    password: string;
    cart: [];
    role: boolean;
}

export interface UserModel extends Model<IUser> {};

export class User {

    private _model: Model<IUser>;

    constructor() {
        const schema =  new Schema({
            name: { type: String, required: true },
            email: { type: String, required: true, unique:true },
            password: { type: String, required: true },
            cart: { type: Array, default: Array },
            role: { type: Boolean, default: 0 },
            
        });

        this._model = model<IUser>('User', schema);
    }

    public get model(): Model<IUser> {
        return this._model
    }
}