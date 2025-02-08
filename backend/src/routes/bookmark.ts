import { Router,Response,Request } from "express";
import Bookmark from "../models/bookmark";
const router = Router();

router.get("/",async(req:Request,res:Response):Promise<string | any>=>{
    try {
        const bookmarks = await Bookmark.find();

        res.status(200).json({bookmarks});
    } catch (error) {
        res.status(500).json({message:"Server errors"});
    }
});

router.post("/",async(req:Request,res:Response):Promise<string|any>=>{
    try {

        const {name,description,url} = req.body;

        const existingBookmark = await Bookmark.findOne({url});

        if(existingBookmark){
            return res.status(400).json({message:"This uri already existing"});
        }

        const newBookmark = new Bookmark({name,description,url});
        await newBookmark.save();

    } catch (error) {
        res.status(500).json({message:"Server errors"});
    }
});

export default router;