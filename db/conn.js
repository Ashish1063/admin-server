const mongoose = require("mongoose");
const DB=process.env.DATABASE

//mongodb+srv://ashishkarotiya7171:<password>@cluster0.djc7t6v.mongodb.net/?retryWrites=true&w=majority

mongoose.connect(DB,{
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(()=> console.log("connection start")).catch((error)=> console.log(error.message));