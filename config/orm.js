/*
Import (require) connection.js into orm.js
In the orm.js file, create the methods that will execute the necessary MySQL commands in the controllers.
These are the methods you will need to use in order to retrieve and store data in your database.
selectAll() 
insertOne() 
updateOne() 
Export the ORM object in module.exports.
*/
var conection = require("../config/connection.js");

var orm ={
  selectAll: function(tableInput, colToSerch, valOfCol){
    var queryString = "SELECT * FROM ??";
    conection.query(queryString,[tableInput, colToSerch, valOfCol],function(err,result){
      console.log(result);
    });
  }
  /*insertOne() 
  updateOne()*/
}

module.exports = orm;