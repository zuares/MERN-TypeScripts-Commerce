import { Schema, model, Document, Model } from 'mongoose';

declare interface IPayment extends Document{
    name : string,
    email : string,
    address : string,
    cart : [],
    status : boolean,
    
}

export interface PaymentModel extends Model<IPayment> {};

export class Payment {

    private _model: Model<IPayment>;

    constructor() {
        const schema =  new Schema({
            name : 
                { type : Number, required: true, trim: true },
            email : 
                { type: String, required: true },
            paymentID : 
                { type: String, required: true },
            address : 
                { type: Array, required: true },
            cart : 
                { type: Array, default: []},
            status : 
                { type: Boolean, required: false },
            
        }, { timestamps : true });

        this._model = model<IPayment>('Payment', schema);
    }

    public get model(): Model<IPayment> {
        return this._model
    }
}