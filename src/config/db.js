require('dotenv').config();
var Sequelize = require('sequelize');
const { PGUSER, PGPASSWORD, PGHOST, PGDATABASE, DB_DIALECT, PGPORT } = process.env;
var db = new Sequelize(PGDATABASE, PGUSER, PGPASSWORD, {
  dialect: DB_DIALECT,
  host: PGHOST,
  port: PGPORT,
});

(async () => {
  try {
    await db.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
})();

module.exports = db;
