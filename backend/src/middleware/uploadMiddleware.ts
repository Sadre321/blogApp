import multer from "multer";
import path from "path";
import fs from "fs";
import { Request } from "express";

// Maksimum dosya boyutu (1 MB)
const MAX_SIZE = 1 * 1024 * 1024;

// Yükleme klasörünü belirle
const uploadDir = path.join(__dirname, "../public/images/uploads");

// Klasörün var olup olmadığını kontrol et ve oluştur
if (!fs.existsSync(uploadDir)) {
    fs.mkdirSync(uploadDir, { recursive: true });
}

const storage = multer.diskStorage({
    destination: (
        req: Request,
        file: Express.Multer.File,
        cb: (error: Error | null, destination: string) => void
    ) => {
        cb(null, uploadDir);
    },
    filename: (req, file, cb) => {
        const uniqueSuffix = `${Date.now()}${path.extname(file.originalname)}`;
        cb(null, uniqueSuffix);
    }
});

// Yükleme middleware'i
const upload = multer({
    storage,
    limits: { fileSize: MAX_SIZE }
});

export default upload;