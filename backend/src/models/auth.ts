import { Schema, model, Document } from "mongoose";

// Kullanıcı verisinin tipini tanımlıyoruz
interface IAuth extends Document {
  name: string;
  email: string;
  password: string;
}

// Auth şemasını oluşturuyoruz
const AuthSchema = new Schema<IAuth>({
  name: {
    type: String,
    unique: true,
    required: [true, "User name is required"],
    trim: true,
  },
  email: {
    type: String,
    unique: true,
    required: [true, "Email is required"],
  },
  password: {
    type: String,
    required: [true, "Password is required"],
  },
});

// Modeli oluşturuyoruz ve dışa aktarıyoruz
const Auth = model<IAuth>("Auth", AuthSchema);

export default Auth;
