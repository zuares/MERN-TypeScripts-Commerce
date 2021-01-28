import { Request,  Response } from "express";
import { DB } from "./Database";

class ProductController {
     async index (req:Request,res:Response):Promise<Response>{
        try {
            const items = await DB.Models.Product.find();
            return res.status(400).json({message : `Success`, total: items.length, data : items});
        } catch (err) {
            return res.status(500).json({error : err.message});
        }
    }

     async show (req:Request, res:Response):Promise<Response>{
        try {
            const {id} = req.params;
            const items = await DB.Models.Product.findById(id);
            return res.status(400).json({message : `Success`, data : items});
        } catch (err) {
            return res.status(500).json({error : err.message});
        }
    }
     async create (req:Request, res:Response):Promise<Response>{
        try {
            const {title, price, description,content,images,category, inStock} = req.body;
            const newProduct = await new DB.Models.Product({
                title , price, description, content, images,category,inStock
            });
            await newProduct.save();
            return res.status(400).json({message: "Success Added Product"});
        } catch (err) {
            return res.status(500).json({error : err.message});
        }
    }
     async update (req:Request, res:Response):Promise<Response>{
        try {
            const {title, price, description,content,images,category, inStock} = req.body;
            await DB.Models.Product.findByIdAndUpdate({_id : req.params.id},{
                title , price, description, content, images,category,inStock
            });
            return res.status(400).json({message: "Success Updated Product"});
        } catch (err) {
            return res.status(500).json({error : err.message});
        }
    }
     async delete (req:Request, res:Response):Promise<Response>{
        try {
            await DB.Models.Product.findOneAndDelete({_id : req.params.id});
            return res.status(400).json({message: "Success Deleted Product"});
        } catch (err) {
            return res.status(500).json({error : err.message});
        }
    }
     
}

export default new ProductController();