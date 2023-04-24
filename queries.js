/* cSpell:disable */

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
  let result = await db.query(
    "SELECT e.id, e.first_name, e.last_name, role.title AS role, CONCAT(m.first_name, ' ', m.last_name) AS manager FROM employee AS e INNER JOIN role ON e.role_id = role.id LEFT JOIN employee AS m ON e.manager_id = m.id"
  );
  console.table(result[0]);
};

Query.addDept = async function (response) {
  let db = await mysql.createConnection(connection);
  await db.query(
    "INSERT INTO department (name) VALUES (?)",
    [response.deptName],
    function (error, results, fields) {
      if (error) throw error;
    }
  );
};

module.exports = Query;
