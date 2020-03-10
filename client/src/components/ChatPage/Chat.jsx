import React, { Component } from 'react'
import QueryString from 'query-string'
import io from 'socket.io-client'

import {Grid} from '@material-ui/core'

import SideBar from '../SideBar/SideBar'
import Messages from '../Messages/Messages'
import ChatFoot from '../ChatFoot'

const ENDPOINT = 'http://127.0.0.1:4000' 
let socket

export default class Chat extends Component {

    state={
        name:'',
        room:'',
        message:'',
        messages:[]
    }

    componentDidMount(){
        const {name,room} = QueryString.parse(window.location.search)
        
        this.setState({
            name,
            room
        })
        console.log(this.state);
        
        socket = io.connect(ENDPOINT, {reconnect: true})

        socket.emit('join',{name,room},(error)=>{
            //acknowledgements
            if(error){
                return {error}
            }
            console.log('message delivered!');
        })

        socket.on('message',(message,name)=>{
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
        
        if(message){
            socket.emit('sendMessage',message,(error)=>{
                if(error){
                    return {error}
                }
                this.setState({
                    message:''
                })
            })

        }
        const newMessages = [...this.state.messages]
        const data = {
            message:this.state.message,
            name:this.state.name
        }
        newMessages.push(data)

        this.setState({
            messages:newMessages
        })
    }

    render(){
        return (
            <Grid container style={{height:'100%'}}>
                <Grid item xs={3} style={{height:'100%'}}>
                    <SideBar/>
                </Grid>
                <Grid item xs={9} style={{height:'100%'}}>
                    <Grid item xs={12} style={{height:'calc(100% - 72px)'}}>
                        <Messages messages={this.state.messages}/>
                    </Grid>
                    <Grid item xs={12} style={{height:'10%'}}>
                        <ChatFoot inputHandler={this.inputHandler} message={this.state.message} send={this.sendMessageHandler}/>
                    </Grid>
                </Grid>
            </Grid>
        )
    }
}