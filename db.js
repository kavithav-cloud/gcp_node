const poll = require('pg-pool');
const dotenv = require('dotenv');
dotenv.config();        

const pool = new poll({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,  
    database: process.env.DB_NAME,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT,
});

const query = 'SELECT * FROM test.user';

const queryresults = () => {
    return new Promise((resolve, reject) => {
        pool.query(query, (err, res) => {
            if (err) {
                console.error('Error executing query', err.stack);
                reject(err);
            } else {
                resolve(res.rows);
            }
        });
    });
};
module.exports = { queryresults };
 

