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
  insertOne: (table, cols, vals, cb) => {
    const queryString = `INSERT INTO ${table} (${cols}) VALUES (?)`;
    console.log(queryString);
    connection.query(queryString, vals, (err, res) => {
      if (err) throw err;
      console.log(res);
      cb(res);
    });
  },
  updateOne: (table, condition, cb) => {
    const queryString = `UPDATE ${table} SET devoured = true WHERE ${condition}`;
    connection.query(queryString, (err, res) => {
      if (err) throw err;
      console.log(res);
      cb(res);
    });
  }
};

module.exports = orm;
