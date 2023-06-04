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

Query.listDepartments = async function () {
  let db = await mysql.createConnection(connection);
  let result = await db.query("SELECT name FROM department");
  let deptArray = result[0].map((obj) => obj.name);
  return deptArray;
};

Query.viewRoles = async function () {
  let db = await mysql.createConnection(connection);
  let result = await db.query(
    "SELECT role.id, title, salary, department.name AS department FROM role INNER JOIN department ON department.id = role.department_id"
  );
  console.table(result[0]);
};

Query.listRoles = async function () {
  let db = await mysql.createConnection(connection);
  let result = await db.query("SELECT title FROM role");
  let roleArray = result[0].map((obj) => obj.title);
  return roleArray;
};

Query.viewEmployees = async function () {
  let db = await mysql.createConnection(connection);
  let result = await db.query(
    "SELECT e.id, e.first_name, e.last_name, role.title AS role, CONCAT(m.first_name, ' ', m.last_name) AS manager FROM employee AS e INNER JOIN role ON e.role_id = role.id LEFT JOIN employee AS m ON e.manager_id = m.id"
  );
  console.table(result[0]);
};

Query.listEmployees = async function () {
  let db = await mysql.createConnection(connection);
  let result = await db.query(
    "SELECT CONCAT(first_name, ' ', last_name) AS employee FROM employee"
  );
  let employeeArray = result[0].map((obj) => obj.employee);
  return employeeArray;
};

Query.addDept = async function (response) {
  let db = await mysql.createConnection(connection);
  await db.query(
    "INSERT INTO department (name) VALUES (?)",
    [response.deptName],
    function (error) {
      if (error) throw error;
    }
  );
};

Query.addRole = async function (response) {
  let deptArray = await Query.listDepartments();
  let deptId = deptArray.indexOf(response.dept) + 1;
  let db = await mysql.createConnection(connection);
  await db.query(
    "INSERT INTO role (title, salary, department_id) VALUES (?, ?, ?)",
    [response.roleName, response.salary, deptId],
    function (error) {
      if (error) throw error;
    }
  );
};

Query.addEmployee = async function (response) {
  let roleArray = await Query.listRoles();
  let roleId = roleArray.indexOf(response.role) + 1;
  let employeeArray = await Query.listEmployees();
  let employeeId = employeeArray.indexOf(response.manager) + 1;
  let db = await mysql.createConnection(connection);
  await db.query(
    "INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES (?, ?, ?, ?)",
    [response.firstName, response.lastName, roleId, employeeId],
    function (error) {
      if (error) throw error;
    }
  );
};

Query.updateEmployee = async function (response) {
  let employeeArray = await Query.listEmployees();
  let employeeId = employeeArray.indexOf(response.employee) + 1;
  let roleArray = await Query.listRoles();
  let roleId = roleArray.indexOf(response.role) + 1;
  let db = await mysql.createConnection(connection);
  await db.query(
    "UPDATE employee SET role_id = ? WHERE id = ?",
    [roleId, employeeId],
    function (error) {
      if (error) throw error;
    }
  );
};

module.exports = Query;
