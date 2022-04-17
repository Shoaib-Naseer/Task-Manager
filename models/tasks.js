const mongoose = require('mongoose');
const { Schema } = mongoose;

const TaskShema = new Schema(
  {
    name: {
      type: String,
      unique: [true, 'Name already Exists'],
      required: [true, 'Name cant be empty'],
      maxlength: [15, 'Name cant be greater than 15 characters'],
      minlength: [4, 'Name cant be shorter than 4 characters'],
      trim: true,
    },
    completed: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model('TaskSchema', TaskShema);
