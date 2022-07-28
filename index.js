const db = require('./db/db.js');
const ascii_text_generator = require('ascii-text-generator')
const inquirer = require("inquirer");

const cTable = require('console.table');


db.viewEmployee().then(data => {
    // console.log(data[0]);
});

//// TODO: Create an array of questions for user input
const exitQuestion = {
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

const departmentQuestion = {
    type: 'input',
    name: 'deptName',
    message: 'What is the name of the new department?'
}

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


function init() {
    let text = "/*\n" + ascii_text_generator("Zaphods Employee Tracker", "2") + "\n*/";
    console.log(text);
    askChoice()
};
function askNewDept() {
    inquirer.prompt(departmentQuestion).then(answers => {
        db.addDept(answers.deptName).then(data => {
            askChoice();
        })
    })
}

function askNewRole() {
    inquirer.prompt(newRoleQuestions).then(answers => {
        db.addRole(answers.roleName, answers.deptID, answers.salary).then(data => {
            askChoice();
        })
    })
}

function addNewEmployee() {
    inquirer.prompt(newEmployeeQuestions).then(answers => {
        db.addEmployee(answers.firstName, answers.lastName, answers.role, answers.manager).then(data => {
            askChoice();
        })
    })
}

function askChoice() {
    inquirer.prompt(exitQuestion)
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
            }
        })
}



// // Function call to initialize app
init();