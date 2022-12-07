const mysql = require("mysql");

const conn = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "clothes_shoop",
});

conn.connect((err) => {
  if (err) throw err;
  console.log("Uspješno povezan sa bazom podataka!!!!!!!!!!!");
});

module.exports = conn;