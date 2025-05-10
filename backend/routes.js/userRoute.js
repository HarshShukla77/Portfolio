const express = require('express');
const {userControl} = require("../controllers/userController")

const router = express.Router();

router.route("/").post(userControl);
module.exports = router;