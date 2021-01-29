const express = require("express");
const fileUpload = require("express-fileupload");

const app = express();

app.use(fileUpload());

//upload endpoint
app.post("/upload", (req, res) => {
  if (req.files == null) {
    return res.status(400).json({ msg: "No file uploaded" });
  }

  const file = req.files.file;

  file.mv(`${__dirname}/client/data/img/${file.name}`, (err) => {
    if (err) {
      console.error(err);
      return res.status(500).send(err);
    }

    res.json({ fileName: file.name, filePath: `/img/${file.name}` });
  });
});

app.listen(5000, () => console.log("server start... ..."));
