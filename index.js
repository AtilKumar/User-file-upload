const express = require("express")
const app = express();

require("dotenv").config()

const PORT = process.env.PORT || 3000

app.use(express.json())

const filesupload = require("express-fileupload")
app.use(filesupload())

const dbConnect = require("./config/database")
dbConnect() //<--- here -- .connect() 

const cloudinary = require("./config/cloudinary")
// cloudinary.connect();  //<--  here -- cloudinary.cloudinaryConnect() 

const Upload = require("./routes/fileUpload")
app.use("/api/v1/upload", Upload)


app.listen(PORT, ()=>{
    console.log(`server started at ${PORT}`);
})


app.get("/", (req, res) => {
    res.send("<h2>This is the homepage<h2>")
})
