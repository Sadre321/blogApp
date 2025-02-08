import authMiddleware from '../middleware/authMiddleware';
import Blog from '../controllers/blog';
import { Router } from "express";
const router = Router();

router.get("/",Blog.GetAllBlogs);

router.post("/",Blog.CreateBlog);


export default router;