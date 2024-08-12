// module.exports = (req, res) => {
//     const reqBody = { ...req.body, added: new Date() };
//     messages.push(reqBody);
//     res.redirect("/");
//   };

const pool = require("./pool.js");

exports.addMessage = (req, res) => {};

exports.getMessages = async (req, res) => {
  const { rows } = await pool.query("SELECT * FROM messages");
  res.render("index", {messages: rows});
};
