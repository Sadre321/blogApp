import { Router} from "express";
import bookmark from "../controllers/bookmark";
import authMiddleware from "../middleware/authMiddleware";
const router = Router();

router.get("/",bookmark.GetAllBookmarks);

router.post("/",authMiddleware,bookmark.CreateBookmark);

export default router;