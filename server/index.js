require('dotenv').config()

const express = require('express')
const app = express()
const http = require('http')
const cors = require('cors')

const {getUser,getUsersInRoom,users,addUser,removeUser} = require('./controllers/users')

const server = http.createServer(app)

const io = require('socket.io')(server)

io.on('connection', socket => {
    console.log('client connected!');
      
    socket.on('join',({name,room},cb)=>{
        socket.join(room)   

        socket.emit('serverMessage','Welcome')
        socket.broadcast.to(room).emit('serverMessage',`${name} joined room`)

        cb()
    })
    
    socket.on('sendMessage',(message)=>{
        name = 'pubg'
        io.to(room).emit('message',{message,name})
    })

    socket.on('disconnect',()=>{
        io.to(room).emit('serverMessage',`${name} left`)
    })
})


app.get('/',(req,res)=>res.send('server\'s running test successful'))
app.use(cors)

const port = process.env.PORT || 4000   
server.listen(port,()=>console.log(`server\' up @${port}`))

