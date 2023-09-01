//dotenv
require('dotenv').config()
const dbConfig = {
  "development": {
    "username": process.env.DATABASE_USERNAME,
    "password": process.env.DATABASE_PASSWORD,
    "database": process.env.DATABASE,
    "host": process.env.DATABASE_HOST,
    "dialect": "postgres",
    seederStorage: 'sequelize',
    pool: {
      max: 20,
      min: 5,
      acquire: 15000,
      idle: 10000
    }

  },
  "test": {
    "username": process.env.DATABASE_USERNAME,
    "password": process.env.DATABASE_PASSWORD,
    "database": process.env.DATABASE,
    "host": process.env.DATABASE_HOST,
    "dialect": "postgres"
  },
  "production": {
    "username": process.env.DATABASE_USERNAME,
    "password": process.env.DATABASE_PASSWORD,
    "database": process.env.DATABASE,
    "host": process.env.DATABASE_HOST,
    "dialect": "postgres"
  }
}

if (process.env.DATABASE_SSL === 'true') {
  dbConfig[process.env.NODE_ENV].dialectOptions = {
    ssl: { rejectUnauthorized: false }
  }
}

module.exports = dbConfig


