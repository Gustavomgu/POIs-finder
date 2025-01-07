const { Sequelize } = require("sequelize");

const sequelize = new Sequelize(process.env.DATABASE_URL, {
    dialect: 'postgres',
    logging: false
});

const connect = async () => {
    try {
        await sequelize.authenticate();
    } catch (error){
        console.error('Cannot connect to the database', error);
    }
}

module.exports = {connect, sequelize};