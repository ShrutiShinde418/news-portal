exports.imageFileFilter = (req, file, cb) => {
  if (!file.originalname.match(/\.(jpg|jpeg|gif|svg|png)$/)) {
    return cb(new Error("You can only upload image files"), false);
  }
  cb(null, true);
};