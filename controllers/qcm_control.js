const Qcm = require('../models/qcm');

function getQcm(req, res, next) {
    Qcm.find({}, (error, result) => {
      if (error) {
        console.log("find error", error);
        res.redirect("/");
        return;
      }
      //res.render("index", { items: result });
      res.json(result);
    });
  }



  module.exports = {
    getQcm: getQcm
  };