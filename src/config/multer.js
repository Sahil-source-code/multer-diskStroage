const multer=require("multer")

const storage=multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,"uploads/")
    },
    filename :(req,file,cb)=>{
        console.log("in filename",file)
        cb(null,Date.now()+file.originalname) //kahi file hosakti jiska naam same hoga unique needed

    }
})

const upload=multer({storage});
module.exports=upload
