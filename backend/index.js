const express = require("express")
const cors = require("cors")
const bodyParser = require("body-parser")
const mongoose = require("mongoose")
const dotenv = require("dotenv")
const { reset } = require("nodemon")

dotenv.config()
const app = express()
app.use(cors())
app.use(bodyParser.json())

const {Schema} = mongoose

const ServicesSchema = new Schema({
    iconClass: {type:String, required:true},
    name: {type:String, required:true},
    description: {type:String, required:true},
    price: {type:Number, required:true},
})

const Services = mongoose.model("exam", ServicesSchema)

//All Data
app.get("/", (req,res)=>{
    Services.find({},(err,docs)=>{
        if(!err){
            res.send(docs)
        }else{
            res.status(404).json({message: err})
        }
    })
})
//Data by id
app.get("/:id",(req,res)=>{
    const {id} = req.params;
    Services.findById(id,(err,doc)=>{
        if(!err){
            if(doc){
                res.send(doc)
            }else{
                res.status(404).json({message: err})
            }
        }
    })
})
//Post Data
app.post("/",(req,res)=>{
    let service = new Services({
        iconClass:req.body.iconClass,
        name:req.body.name,
        description:req.body.description,
        price:req.body.price
    })
    service.save()
    res.send("Success")
})
//Delete Data
app.delete("/:id", (req,res)=>{
    const {id} = req.params;
    Services.findByIdAndDelete(id,(err,doc)=>{
        if(!err){
            res.send()
        }else{
            res.status(404).json({message: err})
        }
    })
})

mongoose.set('strictQuery', false);
mongoose.connect(process.env.CONNECT_URL)
.then(()=>console.log("Database Connected"))
.catch(()=>console.log("DB Error"))
app.listen(process.env.PORT, console.log("Server Started"))