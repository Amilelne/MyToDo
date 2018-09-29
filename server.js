const express = require('express');
const app = express();
const router = express.Router();
const morgan  = require('morgan');
const http = require('http');

app.use(morgan('dev'));

// app.use((req, res, next) => {
//     res.header('Access-Control-Allow-Origin', '*');
//     res.header('Access-Control-Allow-Headers', 'Origin,X-REquested-with,Content-Type,Accept,Authorization');
//     if(req.method === 'OPTIONS'){
//       res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET');
//       return res.status(200).json({});
//     }
//     next();
// })

// app.use('/api/todos',(req,res,next) => {
//     const page = "Hello";
//     res.end(page);
//     return res.status(200);
// });

app.get('/',function(req,res){
    //res.send("Hello");
    res.sendfile('index.html',{root:__dirname+"/pages"});
})

app.listen(3000, ()=>console.log("Listening on 3000!"));