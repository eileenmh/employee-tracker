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
      let response = await addDeptPrompt();
      await query.addDept(response);
      break;
    case "Add a role":
      break;
    case "Add an employee":
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

function init() {
  selectQuery().then(processQuery).then(restartPrompt);
}

init();
