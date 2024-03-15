const express = require("express");
const router = express.Router();
const booking = require("../Model/booking");

router.get("/booking",async (req,res)=>{
    let data;
    try{
        data = await booking.find({},{_id:0, __v:0});
    } catch(err){
        console.log(err.message);
    }
    if(data.length === 0){
        res.send("No Previous Booking Found !");
        return;
    }
    res.status(200).send(data[data.length - 1]);
});

router.post("/booking",async (req,res)=>{
    let data;
    try{
        data = new booking(req.body);
        await data.save();
    }catch(err){
        console.log(err);
    }
    if(!data){
        res.status(500).send("Unable to add data !!!");
    }else {
        booking.find().then((result)=>res.status(200).send(result[result.length - 1]));
    }
});

router.delete("/booking",async (req,res)=>{
    try{
        await booking.deleteMany();
        res.send("deleted....");
    }catch(err){
         res.status(500).send(err.message);
    }
})
module.exports = router;