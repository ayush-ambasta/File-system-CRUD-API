require('dotenv').config();

const connectTOMongo=require('./db');
const express=require('express');
const app=express();
const port=process.env.PORT || 5000;

connectTOMongo();

app.use(express.json());
app.use(express.urlencoded({
    extended:true
}));

app.use('/uploads',express.static(__dirname+'/uploads'));
app.use('/',require('./routes'));

app.listen(port,()=>{
    console.log(`app is listening at port ${port}`);
})