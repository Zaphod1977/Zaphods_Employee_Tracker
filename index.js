const db = require('./db/db.js');

const inquirer = require("inquirer");

const cTable = require('console.table');


db.viewEmployee().then(data =>{
    console.log(data[0]);
});

//// TODO: Create an array of questions for user input
// const questions = [
//     {
//         type: 'input',
//         name: 'employeeName',
//         message: "What is the team employee's name?"
//     },
//     {
//         type: 'list',
//         name: 'employeeTitle',
//         message: "What is the title of the employee?",
//         choices: [
//             'Manager',
//             'Engineer',
//             'Intern'
//         ]
//     },
//     {
//         type: 'input',
//         name: 'employeeId',
//         message: "What is the employee's id?"
//     },
//     {
//         type: 'input',
//         name: 'employeeEmail',
//         message: "What is the employee's email address?"
//     }];

// const managerQuestion = {
//     type: 'input',
//     name: 'office',
//     message: "What is the manager's office number?"
// };

// const exitQuestion = {
//     type: 'list',
//     name: 'chooseNext',
//     message: "What would you like to do next?",
//     choices: [
//         'Add Engineer',
//         'Add Intern',
//         'Exit'
//     ]
// };

// const internQuestion = {
//     type: 'input',
//     name: 'school',
//     message: "What is the intern's school?"
// };

// const engineerQuestion = {
//     type: 'input',
//     name: 'gUser',
//     message: "What is the engineer's github username?"
// };

// TODO: Create a function to initialize app
// function init() {
//     var managerQuestions = [...questions, managerQuestion, exitQuestion]
//     inquirer.prompt(managerQuestions)
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
// init();