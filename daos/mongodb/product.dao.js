import { response } from "express";
import { ProductModel } from "./models/product.model";

export default class ProductDaoMongoDB {
    async getAll(){
        try {
            const responde = await ProductModel.find({})
            return responde
        } catch (error) {
            console.log(error);
        }
    }
    async getById(id){
        try {
            const responde = await ProductModel.findById(id)
            return response
        } catch (error) {
            console.log(error);
        }
    }
    async create(obj){
        try {
            const responde = await ProductModel.create(obj)
            return responde
        } catch (error) {
            console.log(error);
        }
    }
    async update(id, obj){
        try {
            const responde = await ProductModel.findByIdAndUpdate(id, obj, { new:true })
            return responde
        } catch (error) {
            console.log(error);
        }
    }
    async delete(id){
        try {
            const responde =   await ProductModel.findByIdAndDelete(id)
            return responde
        } catch (error) {
            console.log(error); 
        }
    }
}