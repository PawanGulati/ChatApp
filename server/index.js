require('dotenv').config()

const express = require('express')
const app = express()
const http = require('http')

const server = http.createServer(app)

app.get('/',(req,res)=>res.send('server\'s running test successful'))

const io = require('socket.io')(server)

const port = process.env.PORT || 4000   
app.listen(port,()=>console.log(`server\' up @${port}`))

