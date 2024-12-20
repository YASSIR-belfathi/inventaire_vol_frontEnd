const express = require("express");
const multer = require("multer");
const path = require("path");

const app = express();
const port = 5000;

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

const upload = multer({ storage });

app.post("/upload", upload.single("image"), (req, res) => {
  try {
    res
      .status(200)
      .send({ message: "File uploaded successfully", file: req.file });
  } catch (error) {
    res.status(400).send({ message: "Error uploading file", error });
  }
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
