let orm = require("../config/orm");

let burger = {
  selectAll: cb => {
    orm.selectAll("burgers", res => {
      cb(res);
    });
  },
  // The variables cols and vals are arrays.
  insertOne: (cols, vals, cb) => {
    orm.insertOne("burgers", cols, vals, res => {
      cb(res);
    });
  },
  updateOne: (condition, cb) => {
    orm.updateOne("burgers", condition, res => {
      cb(res);
    });
  }
};

module.exports = burger;
