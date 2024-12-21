const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
  num: { type: String, required: true },
  title: { type: String, required: true },
  description: { type: String },
  writername: { type: String },
}, { timestamps: true });


const Task = mongoose.model('Task', taskSchema);


module.exports = Task; 