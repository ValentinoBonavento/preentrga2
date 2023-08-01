import express from 'express'
import morgan from 'morgan'
import { errorHandler } from './middlewares/errorHandler.js'
import './daos/mongodb/connection.js'
import productRouter from './routes/products.route.js'

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(errorHandler)
app.use(morgan('dev'))

app.use('/api/products', productRouter)

app.listen(8080,() =>{
console.log('Server listening on port 8080');
} )