const db = require('./db/db.js');

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


function init() {
    askChoice()
};
function askNewDept() {
    inquirer.prompt(departmentQuestion).then(answers => {
        db.addDept(answers.deptName).then(data => {
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
            }
        })
}
//         .then((answers) => {
//             var manager = new Manager(answers.employeeName, answers.employeeTitle, answers.employeeId, answers.employeeEmail, answers.office);
//             employees.push(manager)
//             if (
//                 answers.chooseNext === 'Add Engineer'
//             ) {
//                 addEngineer();
//             } else if (
//                 answers.chooseNext === 'Add Intern'
//             ) {
//                 addIntern();
//             } else if (
//                 answers.chooseNext === 'Exit'
//             ) {
//                 var data = renderData(employees);
//                 writeToFile("dist/index.html", data);
//             }
//         })
//         .catch((error) => {
//             if (error.isTtyError) {
//                 // Prompt couldn't be rendered in the current environment
//             } else {
//                 // Something else went wrong
//             }
//         });
// }

//promt user for engineer specific question
// function addEngineer() {
//     var engineerQuestions = [...questions, engineerQuestion, exitQuestion]
//     inquirer.prompt(engineerQuestions)
//         .then((answers) => {
//             var engineer = new Engineer(answers.employeeName, answers.employeeTitle, answers.employeeId, answers.employeeEmail, answers.gUser);
//             employees.push(engineer);
//             if (
//                 answers.chooseNext === 'Add Engineer'
//             ) {
//                 addEngineer();
//             } else if (
//                 answers.chooseNext === 'Add Intern'
//             ) {
//                 addIntern();
//             } else if (
//                 answers.chooseNext === 'Exit'
//             ) {
//                 var data = renderData(employees);
//                 writeToFile("dist/index.html", data);
//             }
//         })
//         .catch((error) => {
//             if (error.isTtyError) {
//                 // Prompt couldn't be rendered in the current environment
//             } else {
//                 // Something else went wrong
//             }
//         });
// };

// //promt user for intern specific question
// function addIntern() {
//     var internQuestions = [...questions, internQuestion, exitQuestion]
//     inquirer.prompt(internQuestions)
//         .then((answers) => {
//             var intern = new Intern(answers.employeeName, answers.employeeTitle, answers.employeeId, answers.employeeEmail, answers.school);
//             employees.push(intern);
//             if (
//                 answers.chooseNext === 'Add Engineer'
//             ) {
//                 addEngineer();
//             } else if (
//                 answers.chooseNext === 'Add Intern'
//             ) {
//                 addIntern();
//             } else if (
//                 answers.chooseNext === 'Exit'
//             ) {
//                 var data2 = renderData(employees);
//                 writeToFile("dist/index.html", data2);
//             }
//         })
//         .catch((error) => {
//             if (error.isTtyError) {
//                 // Prompt couldn't be rendered in the current environment
//             } else {
//                 // Something else went wrong
//             }
//         });
// };

// // Function call to initialize app
init();