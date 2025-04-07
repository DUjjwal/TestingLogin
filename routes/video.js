import express from "express"
import { comment, deleteVideo, dislike, getAllVideo, getSingle, like, upload } from "../controllers/videoController.js"
import { isLoggedIn } from "../middlewares/isLoggedIn.js"

const router = express.Router()

router.route("/upload").post(isLoggedIn, upload)
router.route("/like/:video").post(isLoggedIn, like)
router.route("/dislike/:video").post(isLoggedIn, dislike)
router.route("/all").get(getAllVideo)
router.route("/comment/:video").post(isLoggedIn, comment)
router.route("/single/:video").get(getSingle)
router.route("/delete/:video").delete(isLoggedIn, deleteVideo)

export default router