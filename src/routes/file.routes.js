const express = require("express");
const router = express.Router();
const upload=require('../config/multer')

router.post("/", upload.single("image"), async (req, res) => {
  try {
    let body = req.body;
    let file=req.file
    console.log(file);

    res.status(200).json({
      message: "file received",
    });
  } catch (error) {
    console.log("Error in ", error);
    res.status(500).json({
      message: "Internal Srver Error",
    });
  }
});

module.exports = router;
