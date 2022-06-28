const mysql = require('mysql');
const express = require('express');
const { restart } = require('nodemon');

let app = express();
let port = 8001;
// https://stackoverflow.com/questions/50093144/mysql-8-0-client-does-not-support-authentication-protocol-requested-by-server


// This is Temporary
let mysqlConnection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'taskDB'
});

mysqlConnection.connect((err) => {
    if (!err) {
        console.log('DB connected success')
    } else {
        console.log('DB connection failed \n' + JSON.stringify(err, undefined, 2))
    }
});

// app.listen(port, () => {
//     console.log(`express server is running on ${port} `)
// });

// app.get('/', (req, res) => {

//     mysqlConnection.query('SELECT * FROM test', (err, rows, fields) => {

//         const fetchData = res.status(200);

//         if (!err) {
//             fetchData.json(rows);
//             res.render('index', {tasks: tasks})
//         } else {
//             console.log('what')
//         };
//     });

// });



module.exports = mysql;

