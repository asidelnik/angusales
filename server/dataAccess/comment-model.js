var Sequelize = require('sequelize');
var DataAccessInst = require('./dataAccess');
var customer = require('./customer-model');
// var da = new DataAccess();

class Comment {
    constructor() {
        this.model = DataAccessInst.connection.define('Comments', {
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

        // Customer.model.hasMany(Comment, {as: 'comments', foreignKey: 'customer_id' });
        customer.model.hasMany(this.model, { foreignKey: 'customer_id' });
    }

    getAllRows() {
        Comments.findAll().then(comments => {
            for (let index = 0; index < comments.length; index++) {
                console.log(comments[index].name);
            }
            return comments;
        }, err => {
            console.error(err)
        });
    }
}


const comment = new Comment();

module.exports = comment;

