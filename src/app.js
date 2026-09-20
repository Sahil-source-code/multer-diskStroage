const express=require('express')
const app=express()
const fileRouter=require("./routes/file.routes")
app.use(express.json())
app.get('/',(req,res)=>{
    res.send("backend running successfully")
})
app.use('/file',fileRouter)
module.exports=app
