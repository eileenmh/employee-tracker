# Employee Tracker

For this week's challenge, we were asked to create a command-line application that can be used to manage a company's employee database. It is built with Node.js, and uses Inquirer.js to prompt the user for information about what actions they would like to take in the terminal. Data is managed using mysql. 

The following is a demo of how the application works:
https://drive.google.com/file/d/1SLu5oWf81ZjV2KOaUrvGsWFD78i_7kPd/view

## Acceptance Criteria

We were provided with the following acceptance criteria:

```md
GIVEN a command-line application that accepts user input
WHEN I start the application
THEN I am presented with the following options: view all departments, view all roles, view all employees, add a department, add a role, add an employee, and update an employee role
WHEN I choose to view all departments
THEN I am presented with a formatted table showing department names and department ids
WHEN I choose to view all roles
THEN I am presented with the job title, role id, the department that role belongs to, and the salary for that role
WHEN I choose to view all employees
THEN I am presented with a formatted table showing employee data, including employee ids, first names, last names, job titles, departments, salaries, and managers that the employees report to
WHEN I choose to add a department
THEN I am prompted to enter the name of the department and that department is added to the database
WHEN I choose to add a role
THEN I am prompted to enter the name, salary, and department for the role and that role is added to the database
WHEN I choose to add an employee
THEN I am prompted to enter the employee’s first name, last name, role, and manager, and that employee is added to the database
WHEN I choose to update an employee role
THEN I am prompted to select an employee to update and their new role and this information is updated in the database
```

## Installation

- Download [Node.js](https://nodejs.dev/en/download/). To verify the installation and check for npm, run the following commands in your terminal:

```md
Node --version
npm --version
```

- Download the code for the application from [the repository](https://github.com/eileenmh/README-generator) as a .zip file and then open it, or clone the repository.
- Next you'll need to install the packages listed in package.json by opening the terminal, changing the directory to the application's root, and then running:

```md
npm install
```

This will download the packages necessary to run the application.

In the `queries.js` file, you'll see a `connection` object at line 7. Update the properties to your mysql information. If you're new to mysql, refer to the [documentation on getting started](https://dev.mysql.com/doc/mysql-getting-started/en/).

Finally, you'll need to set up the database's schema and seed the data. Open up the db folder in your terminal and run:

```md
mysql -u root -p
SOURCE schema.sql
SOURCE seeds.sql
quit
```

## Usage Information

Make sure you've followed the installation steps before using the app.
To run the application enter the following command while you are in the application's root directory:

```md
node server.js
```

This will start the prompts for what to put in the README. Once you've answered all of the questions, you'll find the README in the 'output' folder.

## Built With

- [Node.js](https://nodejs.org/en)
- [Inquirer.js](https://www.npmjs.com/package/inquirer)
- [mysql2](https://www.npmjs.com/package/mysql2)

## Credits

- Project prompt provided by [UNC Coding Bootcamp](https://bootcamp.unc.edu/coding/)
- Created by Eileen Harvey ([@eileenmh](https://github.com/eileenmh))