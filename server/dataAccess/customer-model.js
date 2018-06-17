var Sequelize = require('sequelize');
var DataAccessInst = require('./dataAccess');
var company = require('./company-model');

class Customer {
    constructor() {
        this.model = DataAccessInst.connection.define('Customer', {
            customer_id: {
                type: Sequelize.INTEGER, primaryKey: true
            },
            firstName: {
                type: Sequelize.STRING
            },
            lastName: {
                type: Sequelize.STRING
            },
            company: {
                type: Sequelize.STRING,
                references: {
                    model: company.model,
                    key: 'name'
                }
            },
            email: {
                type: Sequelize.STRING
            },
            phone: {
                type: Sequelize.STRING
            }
        });
        company.model.hasMany(this.model, { foreignKey: 'company' })
    }

    getAllRows() {
        return this.model.findAll();
    }

    addCustomer(newCustomer) {
        this.model.create(newCustomer).then((data) => {
            console.log(data);
        }, (err) => {
            console.error(err)
        })
        newCustomer.save();
    }
}


const customer = new Customer();

module.exports = customer;