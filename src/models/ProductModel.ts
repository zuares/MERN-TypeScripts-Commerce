import { Schema, model, Document, Model } from 'mongoose';

declare interface IProuduct extends Document{
    title : string,
    price : Number,
    decription : string,
    content : string,
    category : string,
    checked : boolean,
    inStock : number,
    sold : number,
}

export interface ProductModel extends Model<IProuduct> {};

export class Product {

    private _model: Model<IProuduct>;

    constructor() {
        const schema =  new Schema({
            title : 
                { type : String, required:true, unique:true },
            price : 
                { type : Number, required: true, trim: true },
            description : 
                { type: String, required: true },
            content : 
                { type: String, required: true },
            images : 
                { type: Array, default: [] },
            category : 
                { type: String, required: true},
            checked : 
                { type: Boolean, required: false },
            inStock : 
                { type:Number, required: true },
            sold : 
                { type: Number, default: 0 },
            
        }, { timestamps : true });

        this._model = model<IProuduct>('Product', schema);
    }

    public get model(): Model<IProuduct> {
        return this._model
    }
}