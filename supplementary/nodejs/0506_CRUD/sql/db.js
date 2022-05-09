const mysql = require('mysql2/promise') //object

const pool = mysql.createPool({
    host : '127.0.0.1',
    user : 'root',
    password : 'mysqlpwd',
    database : 'homepage',
})

// console.log(pool);

async function select() {
    const sql = `SELECT * FROM board`
    const [result] = await pool.query(sql);
    console.log(result)
}
select();

module.exports = pool;