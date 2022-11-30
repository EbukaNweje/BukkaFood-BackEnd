const express = require("express")
const Auth = require("../controllers/auth")

const Router = express.Router()

Router.route("/createadmin").post(Auth.CreateAdmin)
Router.route("/loginadmin").post(Auth.LoginAdmiin)

module.exports = Router