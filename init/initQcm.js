const mongoose = require('mongoose');
const Qcm = require("../models/qcm");

// Connected to db

mongoose.connect('mongodb://localhost/test_node_js', 
{ useNewUrlParser: true, useUnifiedTopology: true }, (err) => {
  if(err){
    console.log(err);
  }else {
    console.log('connected to db');
  }
});

//

const myQcm  = new Qcm({
  nameQcm: "Node.js",
  questions : [
    {
      question: "Q1",
      answers: {
        a: "reponse 1.1",
        b: "reponse 1.2",
        c: "reponse 1.3"
      },
      correctAnswer: ["a"]
    },
    {
      question: "Q2",
      answers: {
        a: "reponse 2.1",
        b: "reponse 2.2",
        c: "reponse 2.3"
      },
      correctAnswer: ["c"]
    },
    {
      question: "Q3",
      answers: {
        a: "reponse 3.1",
        b: "reponse 3.2",
        c: "reponse 3.3"
      },
      correctAnswer: ["a", "c"]
    },
    {
      question: "Q4",
      answers: {
        a: "reponse 4.1",
        b: "reponse 4.2",
        c: "reponse 4.3"
      },
      correctAnswer: ["b", "c"]
    },
    {
      question: "Q5",
      answers: {
        a: "reponse 5.1",
        b: "reponse 5.2",
        c: "reponse 5.3"
      },
      correctAnswer: ["b"]
    },
    {
      question: "Q6",
      answers: {
        a: "reponse 6.1",
        b: "reponse 6.2",
        c: "reponse 6.3"
      },
      correctAnswer: ["a"]
    },
    {
      question: "Q7",
      answers: {
        a: "reponse 7.1",
        b: "reponse 7.2",
        c: "reponse 7.3"
      },
      correctAnswer: ["b"]
    },
    {
      question: "Q8",
      answers: {
        a: "reponse 8.1",
        b: "reponse 8.2",
        c: "reponse 8.3"
      },
      correctAnswer: ["c"]
    },
    {
      question: "Q9",
      answers: {
        a: "reponse 9.1",
        b: "reponse 9.2",
        c: "reponse 9.3"
      },
      correctAnswer: ["a", "b"]
    },
    {
      question: "Q10",
      answers: {
        a: "reponse 10.1",
        b: "reponse 10.2",
        c: "reponse 10.3"
      },
      correctAnswer: ["c"]
    },
    {
      question: "Q11",
      answers: {
        a: "reponse 11.1",
        b: "reponse 11.2",
        c: "reponse 11.3"
      },
      correctAnswer: ["a"]
    },
    {
      question: "Q12",
      answers: {
        a: "reponse 12.1",
        b: "reponse 12.2",
        c: "reponse 12.3"
      },
      correctAnswer: ["c"]
    },
    {
      question: "Q13",
      answers: {
        a: "reponse 13.1",
        b: "reponse 13.2",
        c: "reponse 13.3"
      },
      correctAnswer: ["c"]
    },
    {
      question: "Q14",
      answers: {
        a: "reponse 14.1",
        b: "reponse 14.2",
        c: "reponse 14.3"
      },
      correctAnswer: ["c"]
    },
    {
      question: "Q15",
      answers: {
        a: "reponse 15.1",
        b: "reponse 15.2",
        c: "reponse 15.3"
      },
      correctAnswer: ["b", "c"]
    },
    {
      question: "Q16",
      answers: {
        a: "reponse 16.1",
        b: "reponse 16.2",
        c: "reponse 16.3"
      },
      correctAnswer: ["a"]
    },
    {
      question: "Q17",
      answers: {
        a: "reponse 17.1",
        b: "reponse 17.2",
        c: "reponse 17.3"
      },
      correctAnswer: ["c"]
    },
    {
      question: "Q18",
      answers: {
        a: "reponse 18.1",
        b: "reponse 18.2",
        c: "reponse 18.3"
      },
      correctAnswer: ["b"]
    },
    {
      question: "Q19",
      answers: {
        a: "reponse 19.1",
        b: "reponse 19.2",
        c: "reponse 19.3"
      },
      correctAnswer: ["a"]
    },
    {
      question: "Q20",
      answers: {
        a: "reponse 20.1",
        b: "reponse 20.2",
        c: "reponse 20.3"
      },
      correctAnswer: ["b"]
    },
  ]
});


let saveQcm = await myQcm.save();
console.log(saveQcm);

setTimeout(function() {
  mongoose.disconnect();
}, 60000);