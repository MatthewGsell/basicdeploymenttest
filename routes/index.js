var express = require("express");
var router = express.Router();
const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date(),
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date(),
  },
  { text: "Hello Buddy!", user: "James", added: new Date() },
  { text: "Hello my guy!", user: "Daniel", added: new Date() },
  { text: "Hello Weeerld!", user: "Jacob", added: new Date() },
];
/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Mini Messageboard", messages: messages });
});

router.get("/new", (req, res, next) => {
  res.render("form");
});
router.post("/new", (req, res, next) => {
  const name = req.body.nameinput;
  const message = req.body.messageinput;
  messages.push({ text: message, user: name, added: new Date() });
  res.redirect("/");
});

module.exports = router;
