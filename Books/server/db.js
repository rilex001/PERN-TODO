const Pool = require("pg").Pool;

const pool = new Pool({
    user: "postgres",
    password: "intelpentium2.8",
    host: "localhost",
    database: 'bookproject',
    port: 5432
})

module.exports = pool;
