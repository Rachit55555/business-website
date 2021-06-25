const mongoogse = require("mongoose");

// creating a database
mongoogse.connect("mongodb://localhost:27017/Project-6", {
    useCreateIndex:true,
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(() => {
    console.log("connection successful");
}).catch((error) => {
    console.log(error);
})