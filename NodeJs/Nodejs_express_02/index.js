const express= require('express');
const reload=require('reload');
const app=express();

app.set('view engine','ejs');
app.set('views','./views');
app.use(express.static('./public'));
app.get('/',(req,res)=>{
    res.render('home');
});
app.get('/thongtin',(req,res)=>{
   res.render('thongtin',{ArrSinhvien});
});
reload(app);
app.listen(3000);
class sinhvien{
    constructor(hoten,diachi,diemtb)
    {
        this.hoten=hoten;
        this.diachi=diachi;
        this.diemtb=diemtb;
    }
};
const ArrSinhvien=[
    new sinhvien('Đỗ Công Tiền','Bến Tre',9),
    new sinhvien('Nghuyễn Thị Hoàng Nhi','Bến Tre',8.5),
    new sinhvien('Nguyễn Thị Kim Xuyến','Long An',10),
    new sinhvien('Phạm Thanh Phong','Tây Ninh',7.5),
    new sinhvien('Hồ Trung Nghĩa','Tiền Giang',9)
];