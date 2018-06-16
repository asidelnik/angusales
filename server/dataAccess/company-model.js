var Sequelize = require('sequelize');
var DataAccessInst = require('./dataAccess');
// var da = new DataAccess();

class Companies {
    constructor() {
        this.model = DataAccessInst.connection.define('Companies', {
            name: {
                type: Sequelize.STRING, primaryKey: true
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
        return this.model.findAll();
    }
}

const company = new Companies();
module.exports = company;



// company_id: {
            //     type: Sequelize.INTEGER  //, primaryKey: true
            // },

            

// for (let index = 0; index < companies.length; index++) {
//     console.log(companies);
// }
// return companies;