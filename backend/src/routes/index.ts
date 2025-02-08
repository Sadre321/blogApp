import express, { Request, Response } from 'express';
const router = express.Router();

import authRoute from "./auth";
import blogRoute from "./blog";
import bookmarkRoute from "./bookmark";

router.use("/auth",authRoute);
router.use("/blog",blogRoute);
router.use("/bookmark",bookmarkRoute);

export default router;