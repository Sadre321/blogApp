import { Request, Response, NextFunction } from "express";
import JWT from "jsonwebtoken";

interface AuthRequest extends Request {
  user?: any; // Burada user'a özel tip de ekleyebilirsin
}

const authMiddleware = (req: AuthRequest, res: Response, next: NextFunction) => {
    const token = req.header("Authorization");

    if (!token) {
        return res.status(401).json({ error: "Yetkisiz erişim, token gerekli." });
    }

    try {
        const decoded = JWT.verify(token, String(process.env.JWT_SECRET));
        req.user = decoded; // Artık TypeScript hata vermez
        next();
    } catch (error) {
        res.status(401).json({ error: "Geçersiz token." });
    }
};

export default authMiddleware;
