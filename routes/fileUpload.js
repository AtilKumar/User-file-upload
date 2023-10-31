const express = require("express")
const router = express.Router()

const {localFileUpload} = require("../controllers/fileUploadController")

router.post("/localFileUpload", localFileUpload)

module.exports = router;