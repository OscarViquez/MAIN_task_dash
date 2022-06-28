// https://stackoverflow.com/questions/50093144/mysql-8-0-client-does-not-support-authentication-protocol-requested-by-server

// const mysql = require('mysql');
const express = require('express');
// const mysqlServer = require('./model/taskData')
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();

let app = express();

// // ******************************************************
// const todoRouter = require('./controller/router')
// const { restart } = require('nodemon');
// const bodyParser = require('body-parser');
// const path = require('path'); 

// // ******************************************************

// Setting Up File Paths For My ejs/HTML document
// These are basically the paths of folders, then on the ejs file, all i have to do is add the file name
app.use(express.static(__dirname + '/controller'));
app.use(express.static(__dirname + '/public'));
app.use('/css', express.static(__dirname + 'public/css'));

app.use(cors());
app.use(express.json())
app.use(express.urlencoded({extended : false}))

app.set('view engine', 'ejs');

app.listen(process.env.PORT, () => {
    console.log(`express server is running on 5000 `)
});

app.get('/', (req, res) => {
    const tasks = [{
        description: 'THIS IS A TO DO TASK'
    }]
    res.render('index', {tasks: tasks})
});

// // ******************************************************

// app.get('/', (req, res) => {

//     mysqlConnection.query('SELECT * FROM test', (err, rows, fields) => {

//         const fetchData = res.status(200);

//         if (!err) {
//             fetchData.json(rows);
//         } else {
//             console.log('what')
//         };
//     });

// });
// // ******************************************************


app.get('/insert', (req, res) => {

})


app.get('/getAll', (req, res) => {

})

// // ******************************************************

// app.set('view enginer', 'ejs');


// app.use(bodyParser.urlencoded({
//     extended: true,

// }))


// app.use(bodyParser.json())

// // This is Temporary
// let mysqlConnection = mysql.createConnection({
//     host: 'localhost',
//     user: 'root',
//     password: 'password',
//     database: 'taskDB'
// });



// mysqlConnection.connect((err) => {
//     if (!err) {
//         console.log('DB connected success')
//     } else {
//         console.log('DB connection failed \n' + JSON.stringify(err, undefined, 2))
//     }
// });

// app.listen(port, () => {
//     console.log(`express server is running on ${port} `)
// });

// app.get('/', (req, res) => {

//     let sql = "SELECT * FROM tasks";
//     let items = [];
    
//     mysqlConnection.query(sql, (err, result) => {
//         if (err) throw err;
//         items = result;
//         console.log(items);
//         // res.render("index", { items: items });
//         res

//     });

// });

