var Sequelize = require('sequelize');
var DataAccessInst = require('./dataAccess');
var customer = require('./customer-model');
// var da = new DataAccess();

class Companies {
    constructor() {
        this.model = DataAccessInst.connection.define('Companies', {
            company_id: {
                type: Sequelize.INTEGER, primaryKey: true
            },
            name: {
                type: Sequelize.STRING
            },
            address: {
                type: Sequelize.STRING
            },
            country: {
                type: Sequelize.STRING
            }
        });
        // customer.belongsTo(Department, { foreignKey: 'department_id' })
    }

    getAllRows() {
        return this.model.findAll().then(companies => {
            for (let index = 0; index < companies.length; index++) {
                console.log(companies);
            }
            return companies;
        }, err => {
            console.error(err)
        });
    }
}

const company = new Companies();
module.exports = company;




// Many to 1
// Employees to Departments
// Employee.belongsTo(Department, {foreignKey: 'department_id'})

// inner join employees on salaries.employee_id = employees.employee_id
// inner join jobs on jobs.job_id = employees.job_id
// inner join departments on departments.department_id = employees.department_id

// Employee.belongsTo(Department, { foreignKey: 'department_id' })


// Department.hasMany(Employee, { foreignKey: 'department_id' })





// Dolphins.findAll().then(companies => {
//     for (let index = 0; index < companies.length; index++) {
//         console.log(companies[index].name);
//     }
// }, err => {
//     console.error(err)
// });


// Companies.findAll().then(companies => {
//     console.log(companies[0].dataValues.name)
// }, err => {
//     console.error(err)
// });