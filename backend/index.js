const express = require('express')
const cors = require('cors')
const session = require('express-session')
const dotenv = require("dotenv")
const db = require('./config/database')
const SequelizeStore = require('connect-session-sequelize')
const AbsensiRoutes = require('./routers/AbsensiRoute')
const PengumumanRoutes = require('./routers/PengumumanRoutes')
const UserRoutes = require('./routers/UserRoute')
const ProductRoutes = require('./routers/FormRoute')
const AuthRoutes = require('./routers/AuthRoute')
dotenv.config();
const app = express()

const sessionStore = SequelizeStore(session.Store)

const store = new sessionStore({
    db : db
})

app.use(cors({
    credentials : true,
    origin : 'http://localhost:3000'
}))

app.use(session({
    secret: process.env.SESSION_SECRET,
    resave : false,
    saveUninitialized : true,
    store : store,
    cookie : {
        secure: 'auto'
    }
}))

app.use(express.json())
app.use(UserRoutes)
app.use(PengumumanRoutes)
app.use(ProductRoutes)
app.use(AbsensiRoutes)
app.use(AuthRoutes)



app.listen(process.env.APP_PORT,()=>{
    console.log('Server berjalan..')
})