import express, { Request, Response } from 'express';
const router = express.Router();

import authRoute from "./auth";

router.use("/auth",authRoute);

export default router;