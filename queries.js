function Query() {}

Query.viewDepartments = async function () {
  // get the client
  let mysql = require("mysql2/promise");
  // create the connection
  let connection = await mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "f@7vgtoDpMpw@RJ",
    database: "employee_tracker",
  });
  let result = await connection.query("SELECT * FROM department");
  console.table(result[0]);
};

// const db = mysql.createConnection({
//   host: "localhost",
//   user: "root",
//   password: "f@7vgtoDpMpw@RJ",
//   database: "employee_tracker",
// });

//

// Query.viewDepartments = function () {
//   db.query("SELECT * FROM department", function (err, results) {
//     console.table(results);
//   });
// };

// Query.viewRoles = function () {
//   db.query("SELECT * FROM role", function (err, results) {
//     console.table(results);
//   });
// };

// Query.viewEmployees = function () {
//   db.query("SELECT * FROM employee", function (err, results) {
//     console.table(results);
//   });
// };

module.exports = Query;
