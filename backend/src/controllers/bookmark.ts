import { Response, Request } from "express";
import Bookmark from "../models/bookmark";

const GetAllBookmarks = async (req: Request, res: Response): Promise<string | any> => {
    try {
        const bookmarks = await Bookmark.find();

        res.status(200).json({ bookmarks });
    } catch (error) {
        res.status(500).json({ message: "Server errors" });
    }
};

const CreateBookmark = async (req: Request, res: Response): Promise<string | any> => {
    try {

        const { url } = req.body;

        const existingBookmark = await Bookmark.findOne({ url });

        if (existingBookmark) {
            return res.status(400).json({ message: "This uri already existing" });
        }

        console.log(req.body);

        const newBookmark = new Bookmark(req.body);
        await newBookmark.save();

        return res.status(201).json({ message: "Bookmark successfully created" });
    } catch (error) {
        res.status(500).json({ message: "Server errors" });
    }
}

export default {CreateBookmark,GetAllBookmarks};