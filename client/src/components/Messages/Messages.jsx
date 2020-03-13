import React from 'react'
import ScrollToBottom from 'react-scroll-to-bottom'
// import ReactEmoji from 'react-emoji'

import { Container,makeStyles } from '@material-ui/core'
import PersonPinIcon from '@material-ui/icons/PersonPin';

import Message from './Message'

const useStyles = makeStyles(theme=>({
    messages:{
        overflow:'auto',
        flex:'auto',
        padding:'30px',
        height:'100%',
        background:'rgb(215,89,93,0.3)',
    }
}))

export default function Messages({messages,curName}) {
    const classes = useStyles()
    return (
        <ScrollToBottom className={classes.messages}>
            {messages.map((message,i)=>(
                <Message curName={curName} name={message.name} key={i} locationUrl={message.locationUrl}>{message.locationUrl ? (<a href={message.message} target='blank'><PersonPinIcon fontSize='large'/></a>): message.message} </Message>    
            ))}                    
        </ScrollToBottom>
        )
}

