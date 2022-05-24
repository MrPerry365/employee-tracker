const mysql = require("mysql2");
const cTable = require("console.table");
const inquirer = require("inquirer");
const { CLIENT_FOUND_ROWS } = require("mysql/lib/protocol/constants/client");

// Connect to database
const db = mysql.createConnection(
  {
    host: "localhost",
    user: "root",
    password: "covidsux2020",
    database: "employee_tracker_db",
  },
  console.log("Connected to the employee_tracker_db database.")
);

// initial prompt //

function initialPrompt() {
  inquirer
    .prompt({
      type: "list",
      name: "initial_prompt",
      message: "These are your choices. Please select one.",
      choices: [
        "view all departments",
        "view all roles",
        "view all employees",
        "add a department",
        "add a role",
        "add an employee",
        "update an employee role",
      ],
    })
    .then((answer) => {
      if (answer.initial_prompt === "view all departments") {
        viewAllDepartments();
      } else if (answer.initial_prompt === "view all roles") {
        viewAllRoles();
      } else if (answer.initial_prompt === "view all employees") {
        viewAllEmployees();
      } else if (answer.initial_prompt === "add a department") {
        addDepartment();
      } else if (answer.initial_prompt === "add a role") {
        addRole();
      } else if (answer.initial_prompt === "add an employee") {
        addEmployee();
      } else if (answer.initial_prompt === "update an employee role") {
        updateEmployeeRole();
      }
    });
}

// ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// make a function to direct the user to the choice //

// make function for view all department//
function viewAllDepartments() {
  const sql = `SELECT * FROM role`;

  db.query(sql, (err, rows) => {
    if (err) {
      throw err;
    }
    console.table(rows);
    initialPrompt();
  });
}
//when chosen show department names and ids //
// https://www.w3schools.com/nodejs/nodejs_mysql_select.asp  -- Node.js MySQL Select From reference //

// db.connect(allDepartments(err) {
//   if (err) throw err;
//   db.connect("SELECT name, id FROM department", function (err, result, fields) {
//     if (err) throw err;
//     console.log(result);
//     console.log(fields);
//   });
// });

// ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// make a function for view all roles //
// when chosen show, job title, role id, the department that role belongs to, and the salary for that role //

// db.connect(allRoles(err) {
//   if (err) throw err;
//   db.connect("SELECT title, salary, role id FROM role", function (err, result, fields) {
//     if (err) throw err;
//     console.log(result);
//     console.log(fields);
//   });
// });

// Get all roles

// ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// make a function for view all employees //
// when chosen show, a formatted table showing employee data, including employee ids, first names, last names, job titles, departments, salaries, and managers that the employees report to //

// db.connect(allEmployees(err) {
//   if (err) throw err;
//   db.query("SELECT * FROM employee", function (err, result, fields) {
//     if (err) throw err;
//     console.log(result);
//     console.log(fields);
//   });
// });

// Get all employee

// ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// make a function for add a department //
//  when chosen show, a prompt to enter the name of the department and then that department is added to the database //
// - make a function to INSERT new department //

function addDepartment() {
  inquirer.prompt({
    type: "input",
    name: "departmentName",
    message: "What is the name of the new department?",
  });
}

// make a function for add a role //
// when chosen show, a prompt to enter the name, salary, and department for the role and that role is added to the database //
// - make a function for INSERT a role //

function addRole() {
  inquirer.prompt([
    {
      type: "input",
      name: "role",
      message: "What is the name of the role?",
    },
    {
      type: "input",
      name: "salary",
      message: "What is the salary of the role?",
    },
    {
      type: "input",
      name: "department",
      message: "What is the department of the role?",
    },
  ]);
}

// make a function for add an employee //
// when chosen, show a prompt to enter the employee’s first name, last name, role, and manager, and that employee is added to the database //
// - make a function to INSERT an employee //

function addEmployee() {
  inquirer.prompt([
    {
      type: "input",
      name: "first_name",
      message: "What is the first name of the employee?",
    },
    {
      type: "input",
      name: "last_name",
      message: "What is the last name of the employee?",
    },
    {
      type: "input",
      name: "role",
      message: "What is role of the employee?",
    },
    {
      type: "input",
      name: "manager",
      message: "What is the name of the employees manager?",
    },
  ]);
}

// make a function for update an employee role //
// when chosen show,a prompt to select an employee to update and their new role and this information is updated in the database //

function updateEmployeeRole() {
  inquirer.prompt([
    {
      type: "input",
      name: "employeeRole",
      message: "Which employees role would you like to update?",
    },
    {
      type: "input",
      name: "employeeRole",
      message: "What role should the employee now have?",
    },
  ]);
}
initialPrompt();
