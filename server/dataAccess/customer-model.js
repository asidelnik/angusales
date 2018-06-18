var Sequelize = require('sequelize');
var DataAccessInst = require('./dataAccess');
var company = require('./company-model');
// var comment = require('./comment-model');


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
        return this.model.create(newCustomer);
    }

    deleteCustomer(customerId) {
        // Delete comment rows that belong to customerId

        // Delete customer row by customerId

        // this.model.hasMany(comment.model, { foreignKey: 'customer_id', onDelete: 'CASCADE', hooks: true })
        // comment.model.belongsTo(this.model, { foreignKey: 'customer_id', onDelete: 'CASCADE', hooks: true })
        return this.model.destroy({ where: { customer_id: customerId } });
    }
}


const customer = new Customer();

module.exports = customer;