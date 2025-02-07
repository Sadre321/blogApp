import express, { Request, Response } from 'express';
const router = express.Router();

import authRoute from "./auth";
import blogRoute from "./blog";

router.use("/auth",authRoute);
router.use("/blog",blogRoute);

export default router;