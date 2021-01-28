import { Request,  Response } from "express";
import { DB } from "./Database";

class CategoryController {
     async index (req:Request,res:Response):Promise<Response>{
        try {
            const items = await DB.Models.Category.find();
            return res.status(400).json({message : `Success`, total: items.length, data : items});
        } catch (err) {
            return res.status(500).json({error : err.message});
        }
    }

     async show (req:Request, res:Response):Promise<Response>{
        try {
            const {id} = req.params;
            const items = await DB.Models.Category.findById(id);
            return res.status(400).json({message : `Success`, data : items});
        } catch (err) {
            return res.status(500).json({error : err.message});
        }
    }
     async create (req:Request, res:Response):Promise<Response>{
        try {
            const {name} = req.body;
            const newCategory = await new DB.Models.Category({name});
            await newCategory.save();
            return res.status(400).json({message: "Success Added Category"});
        } catch (err) {
            return res.status(500).json({error : err.message});
        }
    }
     async update (req:Request, res:Response):Promise<Response>{
        try {
            const {name} = req.body;
            await DB.Models.Category.findByIdAndUpdate({_id : req.params.id},{
                name
            });
            return res.status(400).json({message: "Success Updated Category"});
        } catch (err) {
            return res.status(500).json({error : err.message});
        }
    }
     async delete (req:Request, res:Response):Promise<Response>{
        try {
            await DB.Models.Category.findOneAndDelete({_id : req.params.id});
            return res.status(400).json({message: "Success Deleted Category"});
        } catch (err) {
            return res.status(500).json({error : err.message});
        }
    }
     
}

export default new CategoryController();