import { User } from "../models/user.js"
import dotenv from "dotenv/config"
const cookieToken = (user, res) => {

    const token = user.getJwtToken()

    const options = {
        expires: new Date(
            Date.now() + process.env.COOKIE_EXPIRY * 24 * 60 * 60 * 1000
        ),
        httpOnly: true
    }

    user.password = undefined

    res.status(200).cookie('token', token, options).json({
        success: true,
        token,
        user
    })

}

export default cookieToken