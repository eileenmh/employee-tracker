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
      return true;
    case "View all roles":
      break;
    case "View all employees":
      break;
    case "Add a department":
      break;
    case "Add a role":
      break;
    case "Add an employee":
      break;
    case "Update an employee role":
  }
};

function restartPrompt() {
  inquirer
    .prompt({
      type: "confirm",
      name: "restart",
      message: "Query complete. Would you like to do something else?",
    })
    .then((response) => {
      if (response.restart === true) {
        init();
      }
    });
}

function init() {
  selectQuery().then(processQuery).then(restartPrompt);
}

init();
