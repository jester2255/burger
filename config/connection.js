//mysql connection set up 
var mysql = require("mysql");

var connection

if (process.env.JAWSDB_URL) {
  // DB is JawsDB on Heroku
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {

  connection = mysql.createConnection({
  port: 3306,
  host: "localhost",
  user: "root",
  password: "5522retsej",//pasword for desktop || 5522retsej for laptop
  database: "burgers_db"
});
};
// Make connection.
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
  
});

// Export connection for our ORM to use.
module.exports = connection;