var Sequelize = require('sequelize');
// const Op = Sequelize.Op;

class DataAccess {
    constructor() {
        this.connection = new Sequelize('Angusales', 'root', 'limor1789', {
            host: 'localhost',
            dialect: 'mysql',
            operatorsAliases: false,
            pool: {
                max: 5,
                min: 0,
                acquire: 30000,
                idle: 10000
            },
            define: {
                timestamps: false,
                freezeTableName: true
            }
        });
    }
}

const DataAccessInst = new DataAccess();

module.exports = DataAccessInst;






/*
class DataAccess {
    constructor() {
        // Server DB connection -----------------------------------
        this.connection = new Sequelize('Angusales', 'root', 'limor1789', {
            host: 'localhost',
            dialect: 'mysql',
            operatorsAliases: false,
            pool: {
                max: 5,
                min: 0,
                acquire: 30000,
                idle: 10000
            },
            define: {
                timestamps: false
            }
        })
    }
}
*/