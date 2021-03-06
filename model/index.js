const koneksi = require("../config/koneksi");
const Sequelize = require("sequelize");
const sequelize = new Sequelize(koneksi.db, koneksi.user, koneksi.pass, {
    host: koneksi.host,
    dialect: koneksi.dialect,
    freezeTableName: true,
    operatorsAliases: 0,
    pool: {
        max: koneksi.pool.max,
        min: koneksi.pool.min,
        acquire: koneksi.pool.acquire,
        idle: koneksi.pool.idle
    },
    define: {
        timestamps: false
    }
});

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;
db.user = require("./user")(sequelize, Sequelize);

module.exports = db;
