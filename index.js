// Project dependancies, packages and file links
const db = require('./db/db.js');
const ascii_text_generator = require('ascii-text-generator')
const inquirer = require("inquirer");
const cTable = require('console.table');

// Test for formating of data.
db.viewEmployee().then(data => {
    // console.log(data[0]);
});


//START - Initial array of questions for user input.
const initialQuestions = {
    type: 'list',
    name: 'chooseNext',
    message: "What would you like to do?",
    choices: [
        'view all departments',
        'view all roles',
        'view all employees',
        'add a department',
        'add a new role',
        'add an employee',
        'update an employee role',
        'Exit'
    ]
};

function askChoice() {
    inquirer.prompt(initialQuestions)
        .then((answers) => {
            if (answers.chooseNext === 'view all departments') {
                db.viewDept().then(data => {
                    console.table(data[0]);
                    askChoice();
                })
            } else if (answers.chooseNext === 'view all roles') {
                db.viewRole().then(data => {
                    console.table(data[0]);
                    askChoice();
                })
            } else if (answers.chooseNext === 'view all employees') {
                db.viewEmployee().then(data => {
                    console.table(data[0]);
                    askChoice();
                })
            } else if (answers.chooseNext === 'add a department') {
                askNewDept();
            } else if (answers.chooseNext === 'add a new role') {
                askNewRole();
            } else if (answers.chooseNext === 'add an employee') {
                addNewEmployee();
            } else if (answers.chooseNext === 'update an employee role') {
                updateEmployeeRole();
            } else if (answers.chooseNext === 'Exit') {
                console.log("Don't Panic! You're all done.");
                process.exit();
            }
        })
}
//END - Initial array of questions for user input.


//START - New department question and function. 
const departmentQuestion = {
    type: 'input',
    name: 'deptName',
    message: 'What is the name of the new department?'
}

function askNewDept() {
    inquirer.prompt(departmentQuestion).then(answers => {
        db.addDept(answers.deptName).then(data => {
            askChoice();
        })
    })
}
//END - New department question and function. 


//START - New employee role question and function. 
const newRoleQuestions = [
    {
        type: 'input',
        name: 'roleName',
        message: 'What is the name of the new role?'
    },
    {
        type: 'input',
        name: 'deptID',
        message: 'What is the department id of the role?'
    },
    {
        type: 'input',
        name: 'salary',
        message: 'What is the yearly salary of this role?'
    }
]

function askNewRole() {
    inquirer.prompt(newRoleQuestions).then(answers => {
        db.addRole(answers.roleName, answers.deptID, answers.salary).then(data => {
            askChoice();
        })
    })
}
//END - New employee role question and function.


//START - New employee question and function. 
const newEmployeeQuestions = [
    {
        type: 'input',
        name: 'firstName',
        message: 'What is the first name of the new employee?'
    },
    {
        type: 'input',
        name: 'lastName',
        message: 'What is the last name of the new employee?'
    },
    {
        type: 'input',
        name: 'role',
        message: 'What is the employee\'s role id?'
    },
    {
        type: 'input',
        name: 'manager',
        message: 'What is the employee\'s magager\'s id?'
    }
]

function addNewEmployee() {
    inquirer.prompt(newEmployeeQuestions).then(answers => {
        db.addEmployee(answers.firstName, answers.lastName, answers.role, answers.manager).then(data => {
            askChoice();
        })
    })
}
//END - New employee question and function. 


//START - Update employee role question and function. 
function updateRoleQuestion(employees, roles) {
    return [
        {
            type: 'list',
            name: 'employee',
            message: 'Select an employee to update.',
            choices: employees
        },
        {
            type: 'list',
            name: 'role',
            message: 'Select a new roll for the employee.',
            choices: roles
        }
    ]
}

function updateEmployeeRole() {
    db.viewEmployee().then(employeeData => {
        var employeeNames = employeeData[0].map((employee) => {
            return employee.first_name + ' ' + employee.last_name;
        })
        db.viewRole().then(roleData => {
            var roleNames = roleData[0].map((role) => {
                return role.title;
            })
            inquirer.prompt(updateRoleQuestion(employeeNames, roleNames)).then(answers => {
                var employeeObj = employeeData[0].filter(emp => {
                    return emp.first_name + ' ' + emp.last_name == answers.employee;
                })
                var roleObj = roleData[0].filter(role => {
                    return role.title == answers.role;
                })
                db.updateEmployee(employeeObj[0].id, roleObj[0].id).then(() => {
                    askChoice();
                })
            })
        })
    })
}
//END - Update employee role question and function. 


//START - Let's get this party started.
function init() {
    let text = "/*\n" + ascii_text_generator("Zaphods Employee Tracker", "2") + "\n*/";
    console.log(text);
    askChoice()
};

//Function call to initialize app
init();