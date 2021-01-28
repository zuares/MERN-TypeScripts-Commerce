import { Schema, model, Document, Model } from 'mongoose';

declare interface ICategory extends Document{
    name : string,
}

export interface CategoryModel extends Model<ICategory> {};

export class Category {

    private _model: Model<ICategory>;

    constructor() {
        const schema =  new Schema({
            name : 
                { type : Number, required: true, trim: true }
            
        }, { timestamps : true });

        this._model = model<ICategory>('Category', schema);
    }

    public get model(): Model<ICategory> {
        return this._model
    }
}