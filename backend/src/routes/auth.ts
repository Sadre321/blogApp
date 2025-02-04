import express, { Request, Response } from "express";

// Router'ı oluşturuyoruz
const router = express.Router();

// Ana sayfa rotası
router.get("/", (req: Request, res: Response): void => {
    res.send("Api ana sayfası");
});

// Rota modülünü dışa aktarıyoruz
export default router;
