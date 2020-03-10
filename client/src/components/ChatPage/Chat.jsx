import React, { Component } from 'react'
import QueryString from 'query-string'
import io from 'socket.io-client'

import {Grid} from '@material-ui/core'

import SideBar from '../SideBar/SideBar'
import Messages from '../Messages/Messages'
import ChatFoot from '../ChatFoot'

const ENDPOINT = 'http://127.0.0.1:8080' 
let socket

export default class Chat extends Component {

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
        return (
            <Grid container style={{height:'100%'}}>
                <Grid item xs={3} style={{height:'100%'}}>
                    <SideBar room={this.state.room} users={this.state.users}/>
                </Grid>
                <Grid item xs={9} style={{height:'100%'}}>
                    <Grid item xs={12} style={{height:'calc(100% - 72px)'}}>
                        <Messages messages={this.state.messages} curName={this.state.name}/>
                    </Grid>
                    <Grid item xs={12} style={{height:'10%'}}>
                        <ChatFoot inputHandler={this.inputHandler} message={this.state.message} send={this.sendMessageHandler}/>
                    </Grid>
                </Grid>
            </Grid>
        )
    }
}