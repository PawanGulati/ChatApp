import React, { Component } from 'react'
import QueryString from 'query-string'
import io from 'socket.io-client'

import {Grid,withStyles, Divider} from '@material-ui/core'

import SideBar from '../SideBar/SideBar'
import Messages from '../Messages/Messages'
import ChatFoot from '../ChatFoot'

const ENDPOINT = 'http://127.0.0.1:8080' 
let socket

const styles = theme =>({
    sideBar:{
        height:'100%',
        [theme.breakpoints.down('sm')]:{
            height:'15%'
        }
    },
    chatBox:{
        height:'100%',
        [theme.breakpoints.down('sm')]:{
            height:'85%'
        }
    },
    chatPanel:{
        height:'90%',
        width:'100%',
        [theme.breakpoints.down('sm')]:{
            height:'85%'
        }
    },
    inputBox:{
        height:'10%',
        borderTop:'1.1px solid #BEBEBE',
        [theme.breakpoints.down('sm')]:{
            height:'15%'
        }
    },
})

export default withStyles(styles)(class Chat extends Component {
    state={
        name:'',
        room:'',
        message:'',
        messages:[]
    }

    componentDidMount(){
        let {name,room} = QueryString.parse(window.location.search)

        name = name.trim().toLowerCase()
        room = room.trim().toLowerCase()
                
        this.setState({
            name,
            room
        })
        
        socket = io.connect(ENDPOINT,{reconnection:true})

        console.log(name,room);
        

        socket.emit('join',{name,room},(error)=>{
            //acknowledgements
            if(error){
                return {error};
            }
            console.log('message delivered!');
        })
        

        socket.on('message',({message,name})=>{
            console.log("userMessage :: ",message);
            //store in messages 
            const data = {
                message,
                name
            } 
            console.log("userMessage data :: ",data);
            
            const newMessages = [...this.state.messages]    
            newMessages.push(data)

            this.setState({
                messages:newMessages
            })
        })

        socket.on('serverMessage',(message)=>{
            console.log("serverMessage :: ",message);
            //store in messages
            const data = {
                message,
                name:'admin'
            } 
            console.log("serverMessage data :: ",data);
            
            const newMessages = [...this.state.messages]
            newMessages.push(data)

            this.setState({
                messages:newMessages
            })
        })
    }

    componentWillUnmount(){
        socket.emit('disconnect')
        socket.off()
    }

    inputHandler= e =>{
       this.setState({
           [e.target.name]:[e.target.value]
       }) 
    }

    sendMessageHandler=(e)=>{
        e.preventDefault()
        const {message} = this.state

        console.log("debg ",message);
        
        if(message){
            socket.emit('sendMessage',message,(error)=>{
                if(error){
                    return console.log({error});
                }
                this.setState({
                    message:''
                })
            })
        }
    }

    render(){
        const {classes} = this.props
        return (
            <Grid container style={{height:'100%'}}>
                <Grid item xs={12} md={3} className={classes.sideBar}>
                    <SideBar room={this.state.room} users={this.state.users}/>
                </Grid>
                <Grid item xs={12} md={9} className={classes.chatBox}>
                    <Grid item xs={12} className={classes.chatPanel}>
                        <Messages messages={this.state.messages} curName={this.state.name}/>
                    </Grid>
                    <Grid item xs={12} className={classes.inputBox}>
                        <ChatFoot inputHandler={this.inputHandler} message={this.state.message} send={this.sendMessageHandler}/>
                    </Grid>
                </Grid>
            </Grid>
        )
    }
})