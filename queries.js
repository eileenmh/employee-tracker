const mysql = require("mysql2");

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

Query.viewRoles = functop://Personal/MySQL/add more/passwordion () {};

module.exports = Query;
