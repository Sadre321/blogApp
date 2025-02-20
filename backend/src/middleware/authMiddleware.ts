import { Request, Response, NextFunction } from "express";
import JWT from "jsonwebtoken";

interface AuthRequest extends Request {
  user?: { id: string; email: string }; // Kullanıcı bilgisi için özel tip belirtebilirsin
}

const authMiddleware = (
  req: AuthRequest,
  res: Response,
  next: NextFunction
): void => {
  const token = req.header("Authorization")?.split(" ")[1]; // "Bearer token" formatında olabilir

  if (!token) {
    res.status(401).json({ error: "Yetkisiz erişim, token gerekli." });
    return; // Return after sending the response
  }

  try {
    const decoded = JWT.verify(token, process.env.JWT_SECRET_KEY as string) as { id: string; email: string };
    console.log(decoded);
    req.user = decoded; // Token çözümlendi ve kullanıcı bilgisi req.user'a atandı
    next(); // Bir sonraki middleware veya route handler'a geç
  } catch (error) {
    res.status(401).json({ error: "Geçersiz token." });
    return; // Return after sending the response
  }
};

export default authMiddleware;
