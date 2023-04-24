/* cSpell:disable */

const inquirer = require("inquirer");
inquirer.registerPrompt("search-list", require("inquirer-search-list"));

const query = require("./queries");

function selectQuery() {
  return inquirer.prompt({
    type: "search-list",
    message: "What would you like to do?",
    name: "selection",
    choices: [
      "View all departments",
      "View all roles",
      "View all employees",
      "Add a department",
      "Add a role",
      "Add an employee",
      "Update an employee role",
    ],
  });
}

const processQuery = async function (response) {
  switch (response.selection) {
    case "View all departments":
      await query.viewDepartments();
      break;
    case "View all roles":
      await query.viewRoles();
      break;
    case "View all employees":
      await query.viewEmployees();
      break;
    case "Add a department":
      let deptResponse = await addDeptPrompt();
      await query.addDept(deptResponse);
      break;
    case "Add a role":
      let roleResponse = await addRolePrompt();
      await query.addRole(roleResponse);
      break;
    case "Add an employee":
      let employeeResponse = await addEmployeePrompt();
      await query.addEmployee(employeeResponse);
      break;
    case "Update an employee role":
  }
};

async function restartPrompt() {
  inquirer
    .prompt({
      type: "confirm",
      name: "restart",
      message: "Query complete. Would you like to do something else?",
    })
    .then((response) => {
      if (response.restart === true) {
        init();
      } else {
        process.exit(0);
      }
    });
}

async function addDeptPrompt() {
  return inquirer.prompt({
    type: "input",
    name: "deptName",
    message: "What is the name of the department?",
  });
}

async function addRolePrompt() {
  let deptOptions = await query.listDepartments();
  return inquirer.prompt([
    {
      type: "input",
      name: "roleName",
      message: "What is the name of the of the role?",
    },
    {
      type: "number",
      name: "salary",
      message: "What is the salary of the role?",
    },
    {
      type: "search-list",
      name: "dept",
      message: "Which department does the role belong to?",
      choices: deptOptions,
    },
  ]);
}

async function addEmployeePrompt() {
  let roleOptions = await query.listRoles();
  let managerOptions = await query.listEmployees();
  return inquirer.prompt([
    {
      type: "input",
      name: "firstName",
      message: "What is the employee's first name?",
    },
    {
      type: "input",
      name: "lastName",
      message: "What is the employee's last name?",
    },
    {
      type: "search-list",
      name: "role",
      message: "What is the employee's role?",
      choices: roleOptions,
    },
    {
      type: "search-list",
      name: "manager",
      message: "Who is the employee's manager?",
      choices: managerOptions,
    },
  ]);
}

function init() {
  selectQuery().then(processQuery).then(restartPrompt);
}

init();
