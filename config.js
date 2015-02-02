exports.port = process.env.PORT || 8000;
console.log(exports.port);
exports.upload_dir = './uploads';

exports.s3 = {
    key: '',
    secret: '',
    bucket: ''
};

exports.s3_enabled = false;
