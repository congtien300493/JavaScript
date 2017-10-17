class timMax{
    constructor(a,b){
        this.a=a;
        this.b=b;
    }
    getMax()
    {
        const {a,b}=this;
        return eval(a>b)?a:b;       
    }
};
module.exports = timMax;