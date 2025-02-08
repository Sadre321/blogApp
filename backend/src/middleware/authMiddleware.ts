import { Request, Response, NextFunction } from "express";
import JWT from "jsonwebtoken";

interface AuthRequest extends Request {
  user?: { id: string; email: string }; // Kullanıcı bilgisi için özel tip belirtebilirsin
}

const authMiddleware = (
  req: AuthRequest,
  res: Response,
  next: NextFunction
)=> {
    const token = req.header("Authorization")?.split(" ")[1]; // "Bearer token" formatında olabilir

    if (!token) {
        return res.status(401).json({ error: "Yetkisiz erişim, token gerekli." });
    }

    try {
        const decoded = JWT.verify(token, process.env.JWT_SECRET as string) as { id: string; email: string };
        req.user = decoded; // Token çözümlendi ve kullanıcı bilgisi req.user'a atandı
        next(); // Bir sonraki middleware veya route handler'a geç
    } catch (error) {
        return res.status(401).json({ error: "Geçersiz token." });
    }
};

export default authMiddleware;
