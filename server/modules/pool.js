const pg = require('pg');

const Pool = pg.Pool();

const pool = new Pool( {
    database: "favorite_foods",
    host: "localhost",
    port: 5432,
    max: 10,
    idleTimeoutMillis: 30000
});

pool.on('connect', () => {
    console.log("pool connected");
});

pool.on('error', () => {
    console.log('error on pool', error);
});

module.exports = pool;