var Sequelize = require('sequelize');
var DataAccessInst = require('./dataAccess');
// var da = new DataAccess();

class Company {
    constructor() {
        this.model = DataAccessInst.connection.define('Company', {
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

const company = new Company();
module.exports = company;