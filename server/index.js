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
        // console.log(user);

        const {error,user} = addUser({id:socket.id,name,room})
        

        if(error){
            cb(error)
        }

        socket.emit('serverMessage','Welcome')
        socket.broadcast.to(room).emit('serverMessage',`${name} joined room`)

        cb()
    })
    
    socket.on('sendMessage',(message,cb)=>{
        const {error,user} = getUser({id:socket.id})

        console.log("debg ",user);

        if(error){
            return cb(error)
        }

        name = user['name']
        console.log("debg ",name);
        io.to(user.room).emit('message',{message,name})
        cb()
    })

    socket.on('disconnect',()=>{
        const {error,user} = removeUser({id:socket.id})
        if(error){
            return console.log(error);
        }

        io.to(user.room).emit('serverMessage',`${user.name} left`)
    })
})


app.get('/',(req,res)=>res.send('server\'s running test successful'))
app.use(cors)

const port = process.env.PORT || 8080   
server.listen(port,()=>console.log(`server\' up @${port}`))

