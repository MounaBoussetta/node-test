var express = require("express");
var router = express.Router();
const controlQcm = require("../controllers/qcm_control");

/* GET home page. */
router.get("/", function (req, res, next) {
  res.redirect("/users/signin");
  //res.render("index", { title: "Node.js" });
});

router.get("/getQcm", controlQcm.getQcm);

module.exports = router;
