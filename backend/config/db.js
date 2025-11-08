import { Sequelize } from 'sequelize';

const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: 'database.sqlite',
    logging: false
});

export const connectDB = async () => {
    try {
        await sequelize.authenticate();
        await sequelize.sync();
        console.log('SQLite database connected and synced');
    } catch (error) {
        console.error(`Database Error: ${error.message}`);
        process.exit(1);
    }
};

export { sequelize };