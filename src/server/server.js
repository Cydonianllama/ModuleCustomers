const express = require('express')
const app = express()
const cors = require('cors')
const path = require('path')

//support -> PUT DELETE from REST
const methodOverride = require('method-override')

//middlewares
app.use(express.static(path.resolve('dist')))
app.use(cors())
app.use(methodOverride('X-HTTP-Method-Override'))
app.use(express.json())
app.use(express.urlencoded({extended : true}))

//manage only API routes
const APIrouter = require('./router/router')
APIrouter(app)

//only for development
const {
    generateCustomers
} = require('./mock/generateCustomers')
app.post('/generateData/:qty',(req,res)=>{
    const qty = req.params.qty
    generateCustomers(qty)
    res.send({msg : 'success'})
})

app.get('/',(req,res)=>{
    res.sendFile(path.resolve('dist/index.html'))
})

const {
    SERVER_SUCCESS_RUNNING,
    SERVER_ERROR_RUNNING,
} = require('./utils/constants')

const PORT = process.env.PORT || 5000
app.listen(PORT,(err)=>{
    let msg = err ? SERVER_ERROR_RUNNING : SERVER_SUCCESS_RUNNING
    console.log('PORT : ',PORT);
    console.log(msg); 
})