// module.exports = (req, res) => {
//     const reqBody = { ...req.body, added: new Date() };
//     messages.push(reqBody);
//     res.redirect("/");
//   };

const pool = require("./pool.js");

exports.newMessagePost = async (req, res) => {
  const { message, user } = req.body;
  const { rows } = await pool.query("SELECT id FROM messages ORDER BY id DESC LIMIT 1");
  pool.query(
    'INSERT INTO messages (id, message, "user", date) VALUES ($1, $2, $3, $4)',
    [rows.length == 0 ? 0 : rows[0].id+1, message, user, new Date()]
  );
  res.redirect("/");
};

exports.getMessages = async (req, res) => {
  const { rows } = await pool.query("SELECT * FROM messages");
  res.render("index", { messages: rows });
};

exports.newMessageGet = (req, res) => {
  res.render("newMsg");
};
