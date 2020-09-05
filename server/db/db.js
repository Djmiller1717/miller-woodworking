const Sequelize = require("sequelize")
const db = new Sequelize('postgres://localhost/woodworking', {
    logging: false
});
// if deployed
// const acme = new Sequelize(process.env.DATABASE_URL || 'postgres://localhost/acme', {
//     logging: false
// });

module.exports = db
