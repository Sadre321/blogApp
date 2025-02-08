import { Request, Response } from "express";
import Blog from "../models/blog";

const GetAllBlogs = async (req: Request, res: Response): Promise<string|any> => {
    try {
        const blogs = await Blog.find();
        return res.status(200).json({ blogs });
    } catch (error) {
        return res.status(500).json({ message: "Server Error" });
    }
};

const CreateBlog = async (req: Request, res: Response): Promise<string|any> => {
    try {
        const { title, date, description, tags } = req.body;

        const existingBlog = await Blog.findOne({ title });

        if (existingBlog) {
            return res.status(409).json({ message: "Blog already exists" });
        }

        if (!Array.isArray(tags)) {
            return res.status(400).json({ message: "Tags must be an array" });
        }

        const newBlog = new Blog({
            title,
            date: date || new Date(),
            description,
            tags,
        });

        await newBlog.save();

        return res.status(201).json({ message: "Blog successfully created" });
    } catch (error) {
        return res.status(500).json({ message: "Server Error" });
    }
};

export default {GetAllBlogs,CreateBlog};