var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "Janhavi",
  password: "Janhavi",
  database: "my-sql-project"
});

con.connect(function(err) {
  if (err) {
    console.error("Error connecting to database: " + err.stack);
    return;
  }
  console.log("Connected to the database!");
});
