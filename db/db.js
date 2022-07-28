const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Bridges1',   
    database: 'company'
});

const db = {
    viewDept: function () {
        return connection.promise().query(
            'SELECT * FROM `department`'
        );
    },
    viewRole: function () {
        return connection.promise().query(
            'SELECT * FROM `role`'
        );
    },
    viewEmployee: function () {
        return connection.promise().query(
            'SELECT * FROM `employee` join `role` on employee.role_id = `role`.id join department on role.department_id = department.id'
        );
    },
    addDept: function(deptName) {
        return connection.promise().query(
            'INSERT INTO department (`name`) values ( "' + deptName + '" )'
        );
    },
    addRole: function(roleName, deptID, salary){
        return connection.promise().query(
            'INSERT INTO `role` (title, salary, department_id) values ("' + roleName + '" ,  ' + salary + ' ,  ' + deptID + ' )'
        );
    }
}

module.exports = db






// const questions = [
    //     {
    //         type: 'list',
    //         name: 'employeeName',
    //         message: "What woud you like to do?"
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