import { Request,Response,Router } from "express";
const router = Router();

import Blog from "../models/blog";

router.get("/",async(req:Request,res:Response):Promise<string|any>=>{
    try {

        const blogs = await Blog.find();

        res.status(200).json({blogs});
    } catch (error) {
        res.status(500).json({ message: "Server Error" });
    }
});

router.post("/",async (req:Request,res:Response):Promise<string|any>=>{
    try {

        const {title,date,description,tags} = req.body;

        const existingBlog = await Blog.findOne({title:title});

        if(existingBlog){
            return res.status(401).json({message:"Blog already is existing"});
        }

        if(!Array.isArray(tags)){
            return res.status(400).json({message:"Tags must be an array "})
        }

        const newBlog = new Blog({
            title:title,
            date:date || new Date(),
            description:description,
            tags:tags
        })

        await newBlog.save();

        res.status(201).json({message:"Blog is created",data:req.body});
    } catch (error) {
        res.status(500).json({ message: "Server Error" });
    }
})


export default router;