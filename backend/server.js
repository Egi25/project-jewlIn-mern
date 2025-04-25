let express = require("express");
let cors = require("cors");
let mongoose = require("mongoose");
let session = require("express-session");
let contactRoute = require ("./routes/contactRoute");
let itemRoute  = require("./routes/itemRoute.js");
const path = require("path");

let app = express();

app.use(
  cors({
    credentials: true,
    origin: "http://localhost:3000",
    exposedHeaders: ["set-cookie"],
  })
);
app.use(
  session({
    secret: "This will be a secret",
    resave: false,
    saveUninitialized: true,
    cookie: {maxAge: 1000 * 60 * 60 * 60 },
  })
);

app.use(express.json({ limit: "1000mb", extended: true }));
app.use("/images", express.static(path.join(__dirname, "/images")));

mongoose.connect("mongodb+srv://dajzmailiegi:egi2003@cluster0.zj4muzx.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
.then(()=>console.log("DB connected"))
.catch((err)=>console.log("Something is wrong",err));

app.use(contactRoute);
app.use(itemRoute);

app.use("/send",(req,res)=>{
  res.send("hello")
})

app.listen(5000, (req,res)=>{
  console.log("server start");
});