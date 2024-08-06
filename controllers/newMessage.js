const messages = require('../models/messages.js')

module.exports = (req, res) => {
  const reqBody = { ...req.body, added: new Date() };
  messages.push(reqBody);
  res.redirect("/");
};
