const mysql = require('mysql2')
const express = require('express');
const { resourceLimits } = require('worker_threads');
const PORT = process.env.PORT || 3001;
const app = express();
app.use(express.urlencoded({ extended:false}));
app.use(express.json)

const db = mysql.createConnection(
    {
        host: 'localhost',
        user: 'root',
        password: 'PENIS10!!!',
        database:'election2'
    }
)
console.log('Connection to the election2 database')

db.query('SELECT * FROM candidates', (err, rows) => {
    console.log(rows);
})

db.query(`SELECT * FROM candidates WHERE id = 1`, (err, row) => {
    if (err){
        console.log(err)
    }
    console.log(row)
})

// db.query(`DELETE FROM candidates WHERE id = ?`, 1, (err, result) => {
//     if (err) {
//         console.log(err)
//     }
//     console.log(result)
// })


const sql = `INSERT INTO candidates (id, first_name, last_name, industry_connected)
    VALUES (?,?,?,?)`;

const params = [1, "Ronald", "Firbank", 1];

db.query (sql, params, (err, results) => {
    if (err) {
        console.log(err)
    }
    console.log(results)
})

app.get('/', (req, res) => {
    res.json({
        message: 'Hello PenisBoy!'
    })
})

app.use((req, res) => {
    res.status(404).end();
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
});