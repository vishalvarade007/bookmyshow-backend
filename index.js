const express = require("express");
const mongoose = require("mongoose");
mongoose.set("strictQuery",false);
const cors = require("cors");
const app = express();
const router = require("./Routes/routes");
const uri = "mongodb+srv://user2002:vishal2002@cluster0.hty7hh9.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";


const port = process.env.PORT || 8080;

//middlewares:
app.use(cors());
app.use(express.json());
app.use("/api",router);

mongoose
    .connect(uri)
    .then(()=>console.log("db connected..."))
    .then(()=>app.listen(port,()=>console.log("server is listening...")))
    .catch((err)=>console.log(err));
