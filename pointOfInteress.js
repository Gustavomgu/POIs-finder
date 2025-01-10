import { Sequelize, DataTypes} from 'sequelize';

const sequelize = new Sequelize({
    host: process.env.DB_HOST,
    dialect: 'postgres',
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
});

const PointOfInteress = sequelize.define('PointOfInteress', {
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    pointX: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    pointY: {
        type: DataTypes.INTEGER,
        allowNull: false,
    }
}, {
    tableName: 'PointOfInteres',
    timestamps: false,
});

sequelize.sync().then(() => {
    console.log('Successfully saved points of Interess');
}).catch((err) => {
    console.error('Error while trying to save points of Interess', err);
});

export default PointOfInteress;