const File=require('../models/file');
const fs = require('fs');
const path = require('path');

module.exports.upload=async (req,res)=>{
    try{
        File.uploadFiles(req,res,async (err)=>{
            if(err){return res.status(500).json({success:false,msg:err})}
            if(req.file){
                filename=req.file.filename;
                await File.create({filename:filename});
                return res.status(200).json({success:true,msg:"file uploaded successfully"});
            }else{
                return res.status(405).json({success:false,msg:"file required"});
            }
        })
    }
    catch(error){
        console.log(error);
        return res.status(500).json({success:false,msg:"Server Error"});
    }
}

module.exports.getallfiles=async(req,res)=>{
    try {
        const file=await File.find({});
        if(file.length){
            return res.status(200).json({success:true,file});
        }else{
            return res.status(404).json({sucess:false,msg:"No file found"});
        }
    }catch(error) {
        console.log(error);
        return res.status(500).json({success:false,msg:"Server Error"});
    }
}

module.exports.download=async(req,res)=>{
    try{
        const id=req.params.id;
        const file=await File.findById(id,{filename:1});
        if(file){
            const filepath=path.join(__dirname,'..',File.filepath,file.filename);
            const filename=file.filename.split('-')[0];
            const extension=file.filename.split('.')[1];
            return res.status(200).download(filepath,`${filename}.${extension}`);
        }else{
            res.status(405).json({success:false,msg:"File not found"});
        }

    }catch(error){
        console.log(error);
        return res.status(500).json({success:false,msg:"Server Error"});
    }
}

module.exports.update=async(req,res)=>{
    try {
        const id=req.params.id;
        const file=await File.findById(id);
        if(file){
            File.uploadFiles(req,res,async(err)=>{
                if(err){return res.status(500).json({success:false,msg:err})}
                
                if(req.file){
                    //if path exists already then we have to delete this
                    const pathexists=path.join(__dirname,'..',File.filepath,file.filename);
                    if(fs.existsSync(pathexists)){
                        fs.unlinkSync(pathexists);
                    }
                    file.filename=req.file.filename;
                    file.save();
                    return res.status(200).json({success:true,msg:"file updated successfully"});
                }else{
                    return res.status(405).json({success:false,msg:"file required"});
                }
            })
        }else{
           return res.status(405).json({success:false,msg:"File not found"});
        }

    } 
    catch(error){
        console.log(error);
        return res.status(500).json({success:false,msg:"Server Error"});
    }
}

module.exports.delete=async(req,res)=>{
    try{
        const file=await File.findById(req.params.id);
        if(file){
            const pathexists=path.join(__dirname,'..',File.filepath,file.filename);
            if(fs.existsSync(pathexists)){
                fs.unlinkSync(pathexists);
            }
            await file.remove();
            return res.status(200).json({success:true,msg:'deleted Successfully'});
        }else{
            return res.status(405).json({success:false,msg:"File not found"});
        }
    }
    catch(error){
        console.log(error);
        return res.status(500).json({success:false,msg:"Server Error"});
    }
}