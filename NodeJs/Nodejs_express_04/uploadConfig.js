var multer = require('multer');
var storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './uploads')
    },
    filename: (req, file, cb) => {
        const vitrichamcuoicung = file.originalname.lastIndexOf('.');
        const extention = file.originalname.substring(vitrichamcuoicung);
        cb(null, file.fieldname + '-' + Date.now() + extention);
    }
})

function fileFilter(req, file, cb) {
    const dk = file.mimetype === 'image/png' || file.mimetype === 'image/jpeg';
    if (!dk) return cb(new Error('File type'));
    cb(null, true);
}
const limits = {
    fileSize: 50000 // gioi han kich thuoc
}
var upload = multer({
    storage: storage,fileFilter,limits
})
module.exports = upload;