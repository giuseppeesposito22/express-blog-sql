const mySql = require("mysql2");

const connection = mySql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: "blog",
  port: 3306,
});

connection.connect((err) => {
  if (err) throw err;
  console.log("Connected!");
});

module.exports = connection;
