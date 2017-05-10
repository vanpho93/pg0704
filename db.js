const pg = require('pg');

const config = {
    user: 'postgres',
    database: 'NODE0704',
    password: 'khoapham',
    host: 'localhost',
    port: 5432,
    max: 10,
    idleTimeoutMillis: 30000
};

const pool = new pg.Pool(config);

// pool.connect((err, client) => {
//     if (err) return console.log(err);
//     client.query('SELECT * FROM "Product"', (errQuery, result) => {
//         if (errQuery) return console.log(errQuery);
//         console.log(result.rows);
//     });
// });
const queryDB = (sql, cb) => {
    pool.connect((err, client) => {
        if (err) return cb(err, undefined);
        client.query(sql, (errQuery, result) => {
            if (errQuery) return cb(errQuery, undefined);
            cb(undefined, result);
        });
    });
}
// queryDB('SELECT * FROM "Product"', (err, result)=> {
//     if (err) return console.log('LOIIII');
//     console.log(result.rows);
// });

const getAllProduct = (cb) => {
    const sql = 'SELECT * FROM "Product"';
    queryDB(sql, (err, result) => {
        if (err) return cb(err);
        cb(undefined, result.rows);
    });
}

module.exports = queryDB;
