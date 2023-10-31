const mongoose = require("mongoose")
require("dotenv").config()

const dbConnect = () => {
    mongoose.connect(process.env.DATABASE_URL, 
    //     {
    //     useNewUrlParser : true,
    //     useUnifiedTopology: true
    // }
    )
    .then(console.log("DataBase connection successful")) //<--- here, there can be an arrow function here
    .catch((error) => {
        console.log("Error in connection with DataBase");
        console.error(error);
        process.exit(1);
    })
}

module.exports = dbConnect;