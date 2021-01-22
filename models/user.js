const mongoose = require('mongoose');
var passwordHash = require("password-hash");
const Qcm = require('./qcm');

const UserSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    date: { 
        type: Date, 
        default: Date.now 
    },
    evaluations: [{
        evalQcm: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Qcm'
        },
        answers: [{
            evalQuestion: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Question'
            },
            userAnswers: [],
            correctAnswers: []
        }],
        note: Number
    }]
    // postedBy: {
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: 'User'
    // }
});

UserSchema.methods.comparePassword = function(password){
    return passwordHash.verify(password, this.password)
}

//Define the model for User
var User;
if(mongoose.models.User)
    User = mongoose.model('User');
else
    User = mongoose.model('User', UserSchema);

module.exports = User;