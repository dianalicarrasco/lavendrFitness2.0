const Pool = require('pg').Pool;

const pool = new Pool({
    user: "postgres",
    password: "elephant31NYCS",
    host: "localhost",
    port: 5432,
    database: "lavendrfitness"
});

module.exports = pool;