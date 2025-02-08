import express from "express";
import Auth from "../controllers/auth";

// Router'ı oluşturuyoruz
const router = express.Router();

// Giriş (login) rotası
router.post("/login", Auth.Login);

// Kayıt (register) rotası
router.post("/register", Auth.Register);

// Rota modülünü dışa aktarıyoruz
export default router;
