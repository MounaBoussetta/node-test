const mongoose = require("mongoose");

const QuestionSchema = mongoose.Schema({
  parentQcm: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Qcm",
  },
  question: {
    type: String,
    required: true,
    trim: true,
    maxlength: 400,
  },
  answers: {
    a: String,
    b: String,
    c: String,
  },
  correctAnswer: [
    {
      type: String,
    },
  ],
});

//Define the model for Qcm
var Question;
if (mongoose.models.Question) Question = mongoose.model("Question");
else Question = mongoose.model("Question", QuestionSchema);

module.exports = Question;
