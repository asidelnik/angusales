var Sequelize = require('sequelize');
var DataAccessInst = require('./dataAccess');
var customer = require('./customer-model');
// var da = new DataAccess();

class Comment {
    constructor() {
        this.model = DataAccessInst.connection.define('Comment', {
            comment_id: {
                type: Sequelize.INTEGER, primaryKey: true
            },
            creationDate: {
                type: Sequelize.DATE
            },
            customer_id: {
                type: Sequelize.INTEGER,
                references: {
                    model: customer,
                    key: 'customer_id'
                }
            },
            text: {
                type: Sequelize.STRING
            }
        });
        customer.model.hasMany(this.model, { foreignKey: 'customer_id' });
    }

    getAllRows(customerId) {
        return this.model.findAll({
            where: {
                customer_id: customerId
            }
        });
    }

    deleteCustomerComments(customerId) {
        return this.model.destroy({
            where: {
                customer_id: customerId
            }
        });
    }
}


const comment = new Comment();

module.exports = comment;