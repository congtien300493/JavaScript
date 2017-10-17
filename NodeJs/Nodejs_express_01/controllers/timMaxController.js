const timMax=require('../models/timMax');
function Max(req,res){
    const {a,b}= req.params;
    let max= new timMax(a,b);
    res.send(`Số Max là ${max.getMax()}`);
}
module.exports=Max;