var Sequelize = require('sequelize');
var DataAccessInst = require('./dataAccess');
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
    }

    getAllRows() {
        return this.model.findAll().then(companies => {
            console.log(companies);
        }, err => {
            console.error(err);
        });
    }
}

const company = new Companies();
module.exports = company;




// for (let index = 0; index < companies.length; index++) {
//     console.log(companies);
// }
// return companies;