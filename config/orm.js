var connection = require('../config/connection.js');

// Inside the "orm.js" file, create the code that will execute MySQL commands.

// Methods for SQL: selectAll(), insertOne(), updateOne().
var orm = {
  selectAll: function(some_tbl, cb){
    connection.query('SELECT *  FROM ' + some_tbl + ';', function(err, result){
      cb(result);
    });
  },  
  insertOne: function(some_tbl, some_col, some_val, cb){
    connection.query('INSERT INTO ' + some_tbl + ' ( ' + some_col + ' ) ' + ' VALUES (?)', [some_val], function(err, result){
      cb(result);
    });
  },
  updateOne: function(some_tbl, some_set_col, some_set_val, some_col_param, some_val_param, cb){
    connection.query('UPDATE ' + some_tbl + ' SET ' + some_set_col + ' = ? WHERE ' + some_col_param + ' = ?', [some_set_val, some_val_param], function(err, result){
      cb(result);
    });
  },
}//end of object

module.exports = orm;