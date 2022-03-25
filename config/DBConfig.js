/**
 * dbconnection.js
 */

"use strict";


const dbConfig = {
  user: 'postgres',
  host: 'localhost',
  database: 'student-express-app',
  password: '12345',
  port: 5432,
};

const Pool = require("pg").Pool;

module.exports =  { dbConfig, Pool };

