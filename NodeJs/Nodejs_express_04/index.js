const express = require('express');
const reload= require('reload');
const parser =require('body-parser').urlencoded({ extended: false });
const upload =require('./uploadConfig');
const app = express();

app.set('view engine','ejs');
app.set('views','./views');
app.use(express.static('./uploads'));
app.get('/dangnhap',(req,res)=>{
    res.render('home');
});
app.post('/dangnhap',upload.single('avata'),(req,res)=>{ // avata la name  file input ben trang home . form nho phai co enctype="multipart/form-data"
    console.log(req.file);
    /*
    { 
        fieldname: 'avata',
        originalname: 'sach.png',
        encoding: '7bit',
        mimetype: 'image/png',
        destination: './uploads',
        filename: 'avata-1508258309867.png',  //=> ten sau khi thay doi khi up len
        path: 'uploads/avata-1508258309867.png',
        size: 465769 
    }
    */
    const { username,password}=req.body;
    const filename = req.file.filename;
    //res.send(req.body);
    res.render('show',{username,password,filename});
});


reload(app);
app.listen(3000);