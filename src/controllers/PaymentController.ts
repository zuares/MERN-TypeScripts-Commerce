import { Request, Response } from "express";
import { DB } from "./Database";

class PaymentController {
    async getPayment (req:Request, res:Response):Promise<Response> {
        try {
            const items = await DB.Models.Payment.find();
            return res.status(400).json({message : "success", data : items})
        } catch (err) {
            return res.status(500).json({ error: err.message })
        }
    }

    async createPayment (req:Request, res:Response):Promise<Response> {
        try {
            const {id} = res.locals.payload;
            const user = await DB.Models.User.findById(id);
            const {name, _id , email} = user;
            if(!user) return res.status(400).json({message : 'User doesnt exists'});
            const {cart, paymentID, address} = req.body;
            const newPayment = new DB.Models.Payment({
                user_id : _id, name, email,paymentID, cart, address 
            });
            await newPayment.save();
            // runnig function Sold 
            cart.filter((item:any) => sold(item._id, item.quantity, item.sold));
            return res.status(400).json({message : "Success add orders"})
        } catch (err) {
            return res.status(500).json({ error: err.message })
        }
    }

}

const sold = async (id:number|string, qty:number, oldSold:number) => {
    await DB.Models.Product.findByIdAndUpdate({ _id: id }, {
        sold: qty + oldSold
    })
}

export default new PaymentController();