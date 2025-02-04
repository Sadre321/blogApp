import { Request, Response, NextFunction } from "express";

// Hata tipi özelleştirme (AppError)
interface AppError extends Error {
  statusCode?: number;  // Hata için opsiyonel durum kodu
  message: string;       // Hata mesajı
}

// Global hata yakalama middleware'i
const errorMiddleware = (err: AppError, req: Request, res: Response, next: NextFunction) => {
  const statusCode = err.statusCode || 500;  // Hata kodu belirtilmemişse 500 (Sunucu hatası) kullanılır.
  const message = err.message || 'Something went wrong!';  // Hata mesajı belirlenmemişse varsayılan mesaj

  console.error(err.stack);  // Hata logunu konsola yazdırıyoruz

  res.status(statusCode).send({  // Hata kodu ve mesajını döndürüyoruz
    status: 'error',
    message,
    stack: process.env.NODE_ENV === 'development' ? err.stack : undefined  // Geliştirme ortamında stack trace göster
  });
};

export default errorMiddleware;  // Hata middleware'ini dışa aktarıyoruz
