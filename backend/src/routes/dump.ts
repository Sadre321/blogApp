import upload from "../middleware/uploadMiddleware";
import dump from "../controllers/dump";
import { Router } from "express";
import authMiddleware from "../middleware/authMiddleware";

const router = Router();

router.get("/",dump.GetAllDumps);

router.post("/", authMiddleware,upload.array("file", 5),dump.CreateDump );

export default router;
