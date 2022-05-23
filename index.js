const mysql = require('mysql2');
const cTable = require('console.table');
const inquirer = require('inquirer');

// Connect to database
const db = mysql.createConnection(
    {
      host: 'localhost',
      user: 'root',
      password: 'password',
      database: 'employee_tracker_db'
    },
    console.log('Connected to the employee_tracker_db database.')
  );

// cli prompts for user input //
const initial_prompt = 

// initial prompt //

function initial_prompt() {
  inquirer.prompt({
  type:'list',
  name:'initial_prompt',
  message:"These are your choices. Please select one.",
  choices:[
    'view all departments', 'view all roles', 'view all employees','add a department', "add a role", "add an employee", 'update an employee role'
  ]
})
};

// make a function to direct the user to the choice //

// make function for view all department//
//when chosen show department names and ids //
db.connect(allDepartments(err)) {
  if (err) throw err;
  db.connect("SELECT name, id FROM department", function (err, result, fields) {
    if (err) throw err;
    console.log(result);
  })
}

// make a function for view all roles //
// when chosen show, job title, role id, the department that role belongs to, and the salary for that role //

// make a function for view all employees //
// when chosen show, a formatted table showing employee data, including employee ids, first names, last names, job titles, departments, salaries, and managers that the employees report to //

db.connect(allEmployees(err)) {
  if (err) throw err;
  db.query("SELECT * FROM employee", function (err, result, fields) {
    if (err) throw err;
    console.log(result);
  })
}

// make a function for add a department //
//  when chosen show, a prompt to enter the name of the department and then that department is added to the database //

function addDepartment() {
  inquirer.prompt({
    type:'input',
    name:'departmentName',
    message:'What is the name of the new department?'
})
};

// make a function for add a role //
// when chosen show, a prompt to enter the name, salary, and department for the role and that role is added to the database //

function addRole() {
  inquirer.prompt([
    {
    type:"input",
    name:'role',
    message:'What is the name of the role?'
    },
    {
      type:"input",
      name:"salary",
      message:"What is the salary of the role?",
    },
    {
      type:"input",
      name:"department",
      message:"What is the department of the role?",
    }
  ])
};

// make a function for add an employee //
// when chosen, show a prompt to enter the employee’s first name, last name, role, and manager, and that employee is added to the database //


// make a function for update an employee role //
// when chosen show,a prompt to select an employee to update and their new role and this information is updated in the database //





















  module.exports = db;
  