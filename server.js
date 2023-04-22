/* cSpell:disable */

const inquirer = require("inquirer");
inquirer.registerPrompt("search-list", require("inquirer-search-list"));
const mysql = require("mysql2");

// const db = createConnection({
//   host: "localhost",
//   user: "root",
//   password: "f@7vgtoDpMpw@RJ",
//   database: "",
// });

function selectQuery() {
  inquirer
    .prompt({
      type: "search-list",
      message: "Welcome to the Employee Manager. What would you like to do?",
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
    })
    .then(function (answers) {
      console.log(JSON.stringify(answers, null, "  "));
    })
    .catch((e) => console.log(e));
}

selectQuery();
