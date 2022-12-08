const express = require("express"); 
const app = express();
const port = 4000; // react의 기본값은 3000이니까 3000이 아닌 아무 수
const cors = require("cors");
const bodyParser = require("body-parser");
const mysql = require("mysql"); // mysql 모듈 사용
const db=require("./config/db.js")

app.get('/', (req, res) =>{
    res.send('코딩 중!')
})

app.get('/movies', (req, res) =>{
    console.log('/movies')
})

app.listen(port, ()=>{
    console.log(`Server On : http://localhost:${port}`);
})

var connection = mysql.createConnection({
    host : "localhost",
    user : "root", //mysql의 id
    password : "root", //mysql의 password
    database : "tistory", //사용할 데이터베이스
});

connection.connect();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());


app.post("/idplz", (req,res)=>{
    const test = req.body.test;
    // console.log(req.body);
    connection.query("INSERT INTO test (test_body) values (?)",[test],
    function(err,rows,fields){
        if(err){
            console.log("실패");
            // console.log(err);
        }else{
            console.log("성공");
            // console.log(rows);
        };
    });
});

