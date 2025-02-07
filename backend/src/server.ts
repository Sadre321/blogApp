import express from 'express';
import cors from "cors";
import logger from "morgan";
import dotenv from "dotenv";
import mongoose from "mongoose";

dotenv.config();

import route from "./routes/index";

import errorMiddleware from "./middleware/errorMiddleware";

const app = express();
const port: Number = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(logger("dev"));

// MongoDB bağlantısı
(async () => {
  try {
    await mongoose.connect(String(process.env.MONGO_URI));
    console.log("Bağlantı başarıyla sağlandı");
  } catch (err) {
    console.log(err);
  }
})();


app.use("/api", route);
app.use(errorMiddleware);


app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
