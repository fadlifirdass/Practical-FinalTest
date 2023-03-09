const express = require('express')
const cors = require('cors')
const session = require('express')
const dotenv = require("dotenv")
const UserRoutes = require('./routers/UserRoute')
const ProductRoutes = require('./routers/ProductRoute')
dotenv.config();
const app = express()

app.use(session({
    secret: process.env.SESSION_SECRET,
    resave : false,
    saveUninitialized : true,
    cookie : {
        secure: 'auto'
    }
}))

app.listen(process.env.APP_PORT,()=>{
    console.log('Server berjalan..')
})

app.use(cors({
    credentials : true,
    origin : 'http://localhost:3000'
}))
app.use(express.json())
app.use(UserRoutes)
app.use(ProductRoutes)