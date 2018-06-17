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
        return this.model.create(newCustomer);
    }

    deleteCustomer(customerId) {
        this.model.hasMany(Comment.model, { foreignKey: 'customer_id', onDelete: 'CASCADE', hooks: true })
        Comment.model.belongsTo(this.model, { foreignKey: 'customer_id', onDelete: 'CASCADE', hooks: true })
        return this.model.destroy({ where: { customer_id: customerId } });
    }
}


const customer = new Customer();

module.exports = customer;