import { Router} from "express";
import bookmark
 from "../controllers/bookmark";
const router = Router();

router.get("/",bookmark.GetAllBookmarks);

router.post("/",bookmark.CreateBookmark);

export default router;