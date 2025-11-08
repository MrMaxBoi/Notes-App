import { DataTypes } from 'sequelize';
import { sequelize } from '../config/db.js';

const Note = sequelize.define('Note', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    content: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    isPinned: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
    },
    pinnedAt: {
        type: DataTypes.DATE,
        allowNull: true
    }
}, {
    timestamps: true // adds createdAt and updatedAt
});

export default Note;