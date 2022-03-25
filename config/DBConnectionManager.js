/**
 * dbconnectionmgr.js
 */
"use strict";
const pg = require("pg");
const { dbConfig, Pool } = require("./DBConfig.js");


const dbConectionMgr = (function () {
    /**
     * Makes and returns a Database Connection pool using the given config
     */
    const getConnection = function () {
        try{
        const pool = new Pool(dbConfig);
        pool.connect((error) => {
            if (error) {
                console.log(`DB Access Error: ${error}`);
               throw new exception(500, `internal server error`)
            }
        });
        return pool;
    }catch(error){
        console.log(`DB Access Error: ${error}` )
    }
    }
    return {
        getConnection: getConnection
    }
})();

module.exports = dbConectionMgr;
