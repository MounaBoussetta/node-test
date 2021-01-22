const mongoose = require('mongoose');
const Question = require('./question');

const QcmSchema = mongoose.Schema({
    nameQcm: {
        type: String
    },
    questions: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Question'
    }],
    createdAt: { type: Date, default: Date.now }
});

//Define the model for Qcm
var Qcm;
if(mongoose.models.Qcm)
    Qcm = mongoose.model('Qcm');
else
    Qcm = mongoose.model('Qcm', QcmSchema);

module.exports = Qcm;