const express = require("express");
const cors = require("cors");
const fs = require("fs");
const path = require("path");
const app = express();
const fileArray = [];
const pth = "/home/moj/";

app.use(cors());
app.listen(8000, () => {
  console.log(`Server is running on port 8000.`);
});

fs.readdir(pth, (err, files) => {
  files.forEach((file) => {
    fileArray.push(path.join(pth, file));
  });
});

setTimeout(myF, 500);

function myF() {
  let newFile = fileArray.map(function (item, index) {
    return item.replace(/\\/g, "/");
  });
  app.get("/message", (req, res) => {
    res.send(newFile);
  });
}

app.get("/mif", (req, res) => {
  fs.readdir(req.query.path, (err, files) => {
    res.send(files);
  });
});
