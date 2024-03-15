const mongoose = require("mongoose");

//schema for booking;

const bookingSchema = new mongoose.Schema({
    movie:{
        type:"string",
        required:"true",
    },

    slot:{
        type:"string",
        required:"true",
    },

    seats:{
        type:"array",
        required:"true",
    }
});

const booking = mongoose.model("booking",bookingSchema);

module.exports = booking;