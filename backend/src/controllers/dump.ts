import {  Response, Request } from "express";
import path from "path";
import Dump from "../models/dump";

const GetAllDumps = (req: Request, res: Response) => {
    try {
        res.status(200).json({ message: "hi" });
    } catch (error) {
        res.status(500).json({ message: "Server error" });
    }
}

const CreateDump = async (req: Request, res: Response): Promise<string|any> => {
    try {
        const { date, description } = req.body;
        const files = req.files as Express.Multer.File[]; // Multer'dan gelen dosyalar

        // Dosyaların var olup olmadığını kontrol et
        if (!files || files.length === 0) {
            return res.status(400).json({ message: "File is not upload!" });
        }

        // Dosya yollarını ayarla
        const filePaths = files.map((file) => path.join("/public/images/uploads", file.filename));

        const newDump = new Dump({
            date,
            description,
            img:filePaths
        })

        await newDump.save();

        return res.status(200).json({message: "File upload is success!"});
    } catch (error) {
        console.error("File upload error:", error);
        return res.status(500).json({ message: "Server error" });
    }
}

export default {GetAllDumps,CreateDump};