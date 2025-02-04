import express, { Request, Response } from 'express';
import cors from "cors";
import logger from "morgan";
import dotenv from "dotenv";

dotenv.config();

import route from "./routes/index";

import errorMiddleware from "./middleware/errorMiddleware";

const app = express();
const port:Number = 3000;

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cors());
app.use(logger("dev"));


app.use("/api",route);
app.use(errorMiddleware);


app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
