// import dbConnect from "../../util/mongo"
import dbConnect from "../../../util/mongo";
import Product from "../../models/Products"

export default async function handler(req, res) {
    //res.status(200).json({ name: 'John Doe' })
    const {method} = req;

   await dbConnect()

    if(method === "GET"){

    }
    if(method === "POST")
    try{
        const product = await Product.create(req.body);
        res.status(201).json(product);

    }catch(err){
        res.status(500).json(err);
    }

    }

  
  