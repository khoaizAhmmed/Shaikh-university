const mysql = require('mysql2')
require('dotenv').config()

const DBconnect = mysql.createPool({
    host:process.env.DB_HOST,
    user:process.env.DB_USER,
    password:process.env.DB_PASS,
    database:process.env.DATABASE
  });
  module.exports = DBconnect