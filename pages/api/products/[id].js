import dbConnect from "../../../util/mongo"
import Product from "../../../models/Product"

export default async function handler(req,res){
    const { method , query:{id} } = req;

    dbConnect();

    if(method === "GET"){
        try {
            const product = await Product.findById(id);
            res.status(200).json(product);

        } catch (error) {
            res.status(400).json(error);
        }
    }
    
    if(method === "PUT"){
        try {
            const product = await Product.findByIdAndUpdate(id, req.body ,{new : true});
            res.status(200).json(product);
        } catch (error) {
            res.status(400).json(error);
        }
    }

    if(method === "DELETE"){
        try {
            const product = await Product.findByIdAndDelete(id);
            res.status(200).json("The Product is deleted from database");
        } catch (error) {
            res.status(400).json(error);
        }
    }
}



  