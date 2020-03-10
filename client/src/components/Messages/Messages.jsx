import React from 'react'
import ScrollToBottom from 'react-scroll-to-bottom'

import { Container } from '@material-ui/core'

export default function Messages({messages}) {
    return (
        <Container style={{padding:'30px'}}>
            <ScrollToBottom>
                {messages.map((message,i)=>(
                    <div key={i}>
                        {message.message} - {message.name}
                    </div>    
                ))}
            </ScrollToBottom>
        </Container>
    )
}
