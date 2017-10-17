const express= require('express');
//const timMax= require('./controllers/timMaxController');
const app=express();
//router 
app.set('view engine','ejs');//chọn loại template 
app.set('views','./views');

app.get('/about',(req,res)=>{
    res.send('Hello Đỗ Công Tiền');
});
app.get('/',(req,res)=>{
    res.render('index.ejs');
});
app.get('/thongtin/:hoten/:diachi',(req,res)=>{
    const {hoten,diachi} = req.params;
    res.send(`Xin chào tôi là ${hoten} địa chỉ tại ${diachi}`);
});
app.get('/tinhmax/:a/:b',require('./controllers/timMaxController'));
app.listen(3000);