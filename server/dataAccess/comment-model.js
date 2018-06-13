var DataAccessInst = require('./dataAccess');
var Customer = require('./customer-model');
// var da = new DataAccess();

class Comment {
    constructor() {
        this.comments = DataAccessInst.connection.define('Comments', {
            comment_id: {
                type: Sequelize.INTEGER, primaryKey: true
            },
            creationDate: {
                type: Sequelize.DATE
            },
            customer_id: {
                type: Sequelize.INTEGER,
                references: {
                    model: Customer,
                    key: 'customer_id'
                }
            },
            text: {
                type: Sequelize.STRING
            }
        });
        
        Customer.hasMany(Comments, { foreignKey: 'customer_id' })
    }

    getAllRows() {
        return rows;
    }
}


const comment = new Comment();

module.exports = comment;

