exports.uploadImage = function(req, res, next) {
  console.log(req.body.image);
  var image = req.body.image;
  var writePath = __dirname + "/uploads/" + image.name;
  fs.writeFile(writePath, image, function(err) {
    if (err) { res.sendStatus(501) }
    res.sendStatus(200);
  })
  res.sendStatus(200);
}
