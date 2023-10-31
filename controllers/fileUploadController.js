const File = require("../models/file")

exports.localFileUpload = async(req, res) => {
    try{
        const file = req.files.file
        console.log("HERE IS YOUR FILE", file);

        let path = __dirname + "/files/" + Date.now() + `.${file.name.split('.')[1]}`
        console.log("PATH ->", path);

        file.mv(path, (err) => {
            console.log(err);
        })

        res.json({
            success: true,
            message: 'local file uploaded successfully'
        })
    }catch(error){
        console.log(error);
    }
}