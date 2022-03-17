const mongoose = require('mongoose');
const multer=require('multer');
const path=require('path');

const File_Path=path.join('/uploads/files');

const fileSchema=new mongoose.Schema({
    filename:{
        type:String,
        required:true
    }
},{
    timestamps:true,
});

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null,path.join(__dirname,'..',File_Path));
    },
    filename: function (req, file, cb) {
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
      const filename=file.originalname.split('.')[0];
      cb (null, filename + '-' + uniqueSuffix+path.extname(file.originalname))
    }
});

fileSchema.statics.uploadFiles = multer({storage:  storage,limits:{fileSize:10*1024*1024}}).single('file');
fileSchema.statics.filepath = File_Path;

const file=mongoose.model('file',fileSchema);
module.exports=file;