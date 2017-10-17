const express = require('express');
const reload = require('reload');
const bodyParser=require('body-parser');
const parser = bodyParser.urlencoded({ extended: false });
const app =express();

app.set('view engine','ejs');
app.set('views','./views');
app.use(express.static('./public'));

app.get('/dangnhap',(req,res)=>{
    res.render('signin');
});
app.post('/dangnhap',parser,(req,res)=>{
    console.log(req.body.username);
    res.send(`Tài Khoản là ${req.body.username} và mật khẩu ${req.body.password}`)
});
reload(app);
app.listen(3000);