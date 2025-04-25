const express = require("express");
const itemModel = require("../models/item.js");
const multer = require("multer");
const { v4: uuidv4 } = require("uuid");
const path = require("path");

const app = express();

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "images");
  },
  filename: function (req, file, cb) {
    cb(null, uuidv4() + "-" + Date.now() + path.extname(file.originalname));
  },
});
const fileFilter = (req, file, cb) => {
  console.log("File MIME type:", file.mimetype); // Log the MIME type
  const allowedFileTypes = [
    "image/jpeg",
    "image/jpg",
    "image/png",
    "image/avif",
    "image/webp",
  ];
  if (allowedFileTypes.includes(file.mimetype)) {
    cb(null, true);
  } else {
    cb(null, false);
  }
};
let upload = multer({ storage, fileFilter });
//create shtimi elementeve ne db

app.post("/addItem", upload.single("photo"), async (req, res) => {
  try {
    const newItem = new itemModel({
      ...req.body,
      photo: req.file.filename,
    });
    await newItem.save();
    res.status(200).send(newItem);
  } catch (err) {
    console.log("Item not added", err);
    res.status(500).send("Item not added");
  }
});

//Read leximi afishimi i infove nga db
//te gjitha infot/info vetem per nje element
app.get("/allItems", async (req, res) => {
  try {
    const items = await itemModel.find({});
    console.log(items); //per ta pare tek terminali
    res.status(200).send(items);
  } catch (err) {
    console.log("Item not added", err);
    res.status(500).send("Item not added");
  }
});
app.get("/allNewItems", async (req, res) => {
    try {
      const items = await itemModel.find({});
      console.log(items); //per ta pare tek terminali
      res.status(200).send(items);
    } catch (err) {
      console.log("Item not added", err);
      res.status(500).send("Item not added");
    }
  });
//vetem nje
app.get("/oneItem/:id", async (req, res) => {
  try {
    const itemId = req.params.id;
    const item = await itemModel.findById({ _id: itemId });
    console.log(item); //per ta pare tek terminali
    res.status(200).send(item);
  } catch (err) {
    console.log("Item not added", err);
    res.status(500).send("Item not added");
  }
});
//update ndryshimi i infove
// app.patch("/update/:id", upload.single("photo"), async (req, res) => {
//     try {
//       const itemId = req.params.id;
//       const itemInfo = { ...req.body };
//       if (req.file) {
//         itemInfo.photo = req.file.filename;
//       }
//       const itemUpdate = await itemModel.findByIdAndUpdate(
//         { _id: itemId },
//         { $set: itemInfo },
//         { new: true }
//       );
//       console.log("Item updated");
//       res.status(200).send(itemUpdate);
//     } catch (err) {
//       console.log("Not updated " + err);
//       res.status(500).send("Not updated " + err);
//     }
//   });

//delete fshirja e infove
app.delete("/deleteItem/:id", async (req, res) => {
  try {
    const itemId = req.params.id;
    await itemModel.deleteOne({ _id: itemId });
    console.log("item deleted"); //per ta pare tek terminali
    res.status(200).send("item deleted");
  } catch (err) {
    console.log("Item not deleted", err);
    res.status(500).send("Item not deleted");
  }
});

module.exports = app;
