import express from "express"
import { homeRoute, signUp } from "../controllers/userController.js"
import { isLoggedIn } from "../middlewares/isLoggedIn.js"
const router = express.Router()


router.route("/signup").post(signUp)
router.route("/home").get(isLoggedIn, homeRoute)

export default router