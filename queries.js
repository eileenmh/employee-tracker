const mysql = require("mysql2");
const cTable = require("console.table");

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "f@7vgtoDpMpw@RJ",
  database: "employee_tracker",
});

function Query() {}

Query.viewDepartments = function () {
  db.query("SELECT * FROM department", function (err, results) {
    console.table(results);
  });
};

Query.viewRoles = [];

module.exports = Query;
