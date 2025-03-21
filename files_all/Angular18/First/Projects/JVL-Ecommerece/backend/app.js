const express = require('express')
const app = express()
const dotenv = require('dotenv')
const path = require('path')
const cors = require('cors')
const connectDatabase = require('./config/connectDatabase')

dotenv.config({path: path.join(__dirname, 'config', 'config.env')})

const products = require('./routes/products')
const order = require('./routes/order')

connectDatabase()
app.use(cors())
// app.use(cors({
//     origin: 'http://10.10.30.16:4200/', // Allow requests from this origin
//     methods: 'GET,POST,PUT,DELETE',  // Define allowed HTTP methods
//     credentials: true,               // Allow sending cookies with the requests
//   }));
  
app.use(express.json())
app.use('/api/v1/', products)
app.use('/api/v1/', order)

app.listen(process.env.PORT,()=>{
    console.log(`Server listening to ${process.env.PORT} port in ${process.env.NORD_ENVIRONMENT}`);
})


