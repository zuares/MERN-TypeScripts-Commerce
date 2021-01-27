import { Connection, connect, connection } from "mongoose";
import {User, UserModel} from '../models/UserModel';


declare interface IModels {
    User : UserModel
};


export class DB {
    private static _instance:DB;
    private _db:Connection;
    private _models:IModels;

    constructor() {
        connect( String(process.env.DB_URI ),{
            useNewUrlParser : true,
            useCreateIndex : true,
            useFindAndModify : false,
            useUnifiedTopology : true
         });
         this._db = connection;
         this._db.on('open' , this.connected);
         this._db.on('close' , this.closed);

         this._models = {
             User : new User().model
         }
    }

    public static get Models() {
        if(!DB._instance) {
            DB._instance = new DB();
        }

        return DB._instance._models;
    }

    private connected():void {
        console.log(`Mongoose has connected`)
    }

    private closed():void {
        console.log(`Mongoose has errored`)
    }
}