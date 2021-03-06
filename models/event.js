const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const eventSchema = new Schema({
    entry: { type: String, required: true },
    year: { type: Number, required: true },
    month: { type: String, required: true },
    day: { type: Number, required: true },
    date: { type: Date, default: Date.now }
});

const Event = mongoose.model("Event", eventSchema);

module.exports = Event;