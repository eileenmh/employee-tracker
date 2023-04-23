const cTable = require("console.table");
function Query() {}

let mysql = require("mysql2/promise");
connection = {
  host: "localhost",
  user: "root",
  password: "f@7vgtoDpMpw@RJ",
  database: "employee_tracker",
};

Query.viewDepartments = async function () {
  let db = await mysql.createConnection(connection);
  let result = await db.query("SELECT * FROM department");
  console.table(result[0]);
};

Query.viewRoles = async function () {
  let db = await mysql.createConnection(connection);
  let result = await db.query(
    "SELECT role.id, title, salary, department.name AS department FROM role INNER JOIN department ON department.id = role.department_id"
  );
  console.table(result[0]);
};

Query.viewEmployees = async function () {
  let db = await mysql.createConnection(connection);
  let result = await db.query("SELECT * FROM employee");
  console.table(result[0]);
};

module.exports = Query;
