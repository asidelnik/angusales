var Sequelize = require('sequelize');
var DataAccessInst = require('./dataAccess');
var company = require('./company-model');

class Customer {
    constructor() {
        this.model = DataAccessInst.connection.define('Customers', {
            customer_id: {
                type: Sequelize.INTEGER, primaryKey: true
            },
            firstName: {
                type: Sequelize.STRING
            },
            lastName: {
                type: Sequelize.STRING
            },
            company_id: {
                type: Sequelize.INTEGER,
                references: {
                    model: company.model,
                    key: 'company_id'
                }
            },
            email: {
                type: Sequelize.STRING
            },
            phone: {
                type: Sequelize.STRING
            }
        });
        company.model.hasMany(this.model, { foreignKey: 'company_id' })
    }

    getAllRows() {
        return this.model.findAll().then(companies => {
            console.error(companies);
        }, err => {
            console.error(err);
        });
    }
}


const customer = new Customer();

module.exports = customer;



// --------------------------------------------------------
// only hasmany
// --------------------------------------------------------

// const cutstomer = Customers.build({ customer_id: 5, firstName: "Amos", lastName: "Sidelnik", company_id: 3, email: "amoss@wix.com", phone: "972542408382", });

// cutstomer.save().then((data) => {
//     console.log(data);
// }, (err) => {
//     console.error(err)
// })

// console.log(Customers);



// Many to 1
// Many belongsTo 1
// Customer belongsTo Company
// Comment belongsTo Customer


// Employee.belongsTo(Department, { foreignKey: 'department_id' })