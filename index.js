
const inquirer = require("inquirer");

const mysql = require('mysql2');

const cTable = require('console.table');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'eTracker'
  });

const questions = [
    {
        type: 'input',
        name: 'title',
        message: "what is the title of your readme"
    },
    {
        type: 'input',
        name: 'description',
        message: "leave a brief description"
    },
    {
        type: 'input',
        name: 'installation',
        message: "Add some installation instructions"
    },
    {
        type: 'input',
        name: 'usage',
        message: "What is the application used for?"
    },
    {
        type: 'list',
        name: 'license',
        message: "Select License",
        choices: [
            'Apache',
            'Boost',
            'BSD'
        ]
    },
    {
        type: 'input',
        name: 'contributing',
        message: "Are there any contributors on this project?"
    },
    {
        type: 'input',
        name: 'tests',
        message: "Do you have any tests for your application"
    },
    {
        type: 'input',
        name: 'github',
        message: "Do you have a Github you'd like to add"
    }, 
    {
        type: 'input',
        name: 'email',
        message: "Please include your email address."
    },
];
