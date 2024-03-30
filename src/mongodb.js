const mongoose=require("mongoose")

mongoose.connect("mongodb+srv://viniciuspemo1:qyG7dsOnlwAn1Ten@niciusdatabase.3get4pk.mongodb.net/")
.then(()=>{
    console.log("mongodb connected");
})

.catch(()=>{
    console.log("failed to connect");
})

const LogInSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
})

const collection=new mongoose.model("soufoda",LogInSchema)

module.exports=collection
