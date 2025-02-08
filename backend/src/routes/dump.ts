import {Router,Response,Request} from "express";

const router = Router();

router.get("/",(req:Request,res:Response)=>{
    try {
        res.status(200).json({message:"hi"})
    } catch (error) {
        res.status(500).json({message:"Server error"});
    }
});

export default router;