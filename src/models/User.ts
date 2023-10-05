import { DataTypes } from "sequelize";

const dbUser = require('../config/DatabaseSequelize');

export const User = dbUser.define('User', {
  user_id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  photo: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  telephone: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  last_token: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  last_location: {
    type: DataTypes.STRING,
    allowNull: true,
  },
},
{
  tableName: "users",
  timestamps: false
}
);

module.exports = User;