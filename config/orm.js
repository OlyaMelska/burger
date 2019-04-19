// selectAll()
// insertOne()
// updateOne()
const connection = require("../config/connection");

const orm = {
  selectAll: (table, cb) => {
    connection.query(`Select * FROM ${table};`, (err, res) => {
      if (err) throw err;
      console.log(res);
      cb(res);
    });
  },
  insertOne: (table, cols, cb) => {
    const queryString = `INSERT INTO ${table} (${cols.toString}) VALUES ??`;
    console.log(queryString);
    connection.query(queryString, (err, res) => {
      if (err) throw err;
      console.log(res);
      cb(res);
    });
  },
  updateOne: (table, objColVals, condition, cb) => {
    const queryString = `UPDATE ${table} SET ${objToSql(
      objColVals
    )} WHERE ${condition}`;
    connection.query(queryString, (err, res) => {
      if (err) throw err;
      console.log(res);
      cb(res);
    });
  }
};

module.exports = orm;
