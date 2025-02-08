import upload from "../middleware/uploadMiddleware";
import dump from "../controllers/dump";
import { Router } from "express";

const router = Router();

router.get("/",dump.GetAllDumps);

router.post("/", upload.array("file", 5),dump.CreateDump );

export default router;
