import { Request, Response, NextFunction } from "express";
import JWT from "jsonwebtoken";
import bcrypt from "bcryptjs";

import Auth from "../models/auth";

const Login = async (req: Request, res: Response):Promise<string|any> => {
    try {
        const { email, password } = req.body;

        // E-posta ile kullanıcıyı bulma
        const user = await Auth.findOne({ email });

        if (!user) {
            return res.status(400).json({ message: "User not found" });
        }

        // Şifreyi doğrulama
        const isMatch = await bcrypt.compare(password, user.password);

        if (!isMatch) {
            return res.status(400).json({ message: "Invalid credentials" });
        }

        const token = JWT.sign({ userId: user._id, email: user.email,name:user.name },String(process.env.JWT_SECRET_KEY),{expiresIn:"1h"});

        // Başarılı giriş
        return res.status(200).json({
            message: "Login successful",
            token,
            user: { email: user.email }
        });
    } 
    catch (error) {
        console.error("Error during login:", error);
        return res.status(500).json({ message: "Server error" });
    }
}

const Register = async (req: Request, res: Response): Promise<void> => {
    try {
        const { name, email, password } = req.body;

        // Kullanıcı zaten var mı kontrolü
        const userExisted = await Auth.findOne({ email });

        if (userExisted) {
            res.status(400).json({ message: "User already exists" });
            return;
        }

        // Parolayı hash'leme
        const hashedPass = await bcrypt.hash(password, 10);

        // Yeni kullanıcıyı oluşturma
        const createdUser = new Auth({
            name,
            email,
            password: hashedPass, // Burada password'u doğru şekilde yazıyoruz
        });

        // Kullanıcıyı kaydetme
        await createdUser.save();

        // Başarılı kayıt
        res.status(201).json({ message: "Registration is successful" });

    } catch (error) {
        res.status(500).json({ message: "Server Error" });
    }
}

export default {Login,Register};