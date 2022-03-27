const Pool = require('pg').Pool;
require('dotenv').config()

const pool = new Pool({
    user: "postgres",
    password: process.env.PG_PW, 
    host: "localhost",
    port: 5432,
    database: "lavendrfitness"
});

module.exports = pool;
