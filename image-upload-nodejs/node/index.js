// import { log } from 'console';
// import * as fs from 'fs';
// import {say} from 'cowsay'
// import { callback } from 'chart.js/helpers';


// const express = require('express')
// const cors = require('cors')
// const bodyParser = require('body-parser')
// const multer =  require('multer')

// import express from 'express';


import express  from 'express'
import  cors  from 'cors'
import  multer  from 'multer'
// import { bodyParser } from 'body-parser'
import bodyParser from 'body-parser';

const app = express();
app.use(cors({origin:"*"}))
app.use(bodyParser.json())

app.listen(3000, ()=>{
    console.log("The server started on the port 3000 !!!");
})

const storage = multer.diskStorage({
    destination: (req, file, callback)=>{
        callback(null, 'files')``
    },
    filename: (req, file, callback)=>{
        callback(null, `image_${file.originalname}`)
    }
})

var upload = multer({storage: storage})

app.get("/",(req, res)=>{
    res.send( 
    )
})

app.post('/file', upload.single('file'), (req, res, next)=>{
    const file = res.file
    console.log(file.filename);
    if(!file){
        const error = new Error('please upload a file')
        error.httpStatusCode = 400
        return next(error)
    }
    res.send(file)
})















// console.log("choo choo!!");
// const output = say({text:'moooooo'})
// console.log(output);


// const words = ["unicorn","cupcake","rainbow","kitten"];
// const output = words.join('\n');
// fs.writeFile('words.txt',output,fileWritten);

// function fileWritten(){
//     log("file written!")
// }